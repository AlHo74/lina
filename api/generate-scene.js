import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `Du bist der Erzähler eines deutschen Kinderbuch-Abenteuers für 7-jährige Kinder.
Das Spiel heißt "Lina im Zuckerwatten-Land".

WELT:
Zuckerwatten-Land ist eine magische Welt, in der alles aus Zuckerwatte besteht. Wolken, Bäume, Häuser, Flüsse aus Marshmallow-Schaum. Lina erreicht diese Welt durch ein leuchtendes Portal in ihrem Zimmer.

TON:
- Warm, niedlich, magisch, mit gelegentlich leicht gruselig (kindgerecht für 7-Jährige)
- Kurze, lebendige Sätze
- Tagebuch-Stil, als würde Lina selbst erzählen
- Immer auf Deutsch

CHARAKTERE:
- Lina: neugieriges, mutiges Mädchen aus der echten Welt
- Emmi: Pop-Punk Skaterin mit Spitzhut, denkt wie Avril Lavigne, wirkt mächtige Zauber
- Sophie & Malaika: ulkige Kriegerprinzessinnen, kämpfen lachend und chaotisch
- Grill den Hammer: der Hauptbösewicht, Gangster-Rapper, will Zuckerwatten-Land in einen riesigen Grill verwandeln
- Die Handlanger: Grills Schergen, langsam und sehr dumm, stolpern ständig übereinander
- Annette: coole Lehrerin Anfang 30 mit Brille, hilft bei Rätseln
- Alex: 50-jähriger Clown mit Brille und Jim-Carrey-Gesicht, will helfen, richtet dabei Chaos an
- Karin: Ende 40, lange schwarze Haare, Brille, magische Singstimme, hilft bei Rätseln
- Nura Liya: kleine aber mächtige Heilerin
- Marley: sprechender Golden-Retriever-Welpe, pure Freude
- Dugu: freundliches Katzengespenst, schwebt durch die Gegend
- Dario & Rumpel: Gastcharaktere aus den Koboldkroniken

AUSGABEFORMAT (immer als JSON, kein Markdown drumherum):
{
  "scene_text": "3-5 Sätze Erzähltext im Tagebuchstil",
  "character": "Name des sprechenden Charakters oder null",
  "character_line": "Was der Charakter sagt, oder null",
  "mood": "happy | spooky | exciting | funny | tense",
  "choices": [
    { "id": "a", "text": "Entscheidungstext" },
    { "id": "b", "text": "Entscheidungstext" },
    { "id": "c", "text": "Entscheidungstext (optional)" }
  ],
  "scene_id": "kurzer_bezeichner_ohne_leerzeichen"
}`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { playerName, choiceHistory = [], lastChoice = null } = req.body

  if (!playerName) {
    return res.status(400).json({ message: 'playerName is required' })
  }

  const userMessage = buildUserMessage({ playerName, choiceHistory, lastChoice })

  try {
    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    })

    const raw = message.content[0].text.trim()

    // Strip potential markdown code fences
    const jsonStr = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
    const parsed = JSON.parse(jsonStr)

    return res.status(200).json(parsed)
  } catch (err) {
    console.error('generate-scene error:', err)
    return res.status(500).json({ message: 'Fehler beim Generieren der Szene.' })
  }
}

function buildUserMessage({ playerName, choiceHistory, lastChoice }) {
  if (choiceHistory.length === 0) {
    return `Spielername: ${playerName}
Dies ist der Beginn des Abenteuers. Schreibe die erste Szene: Lina entdeckt das leuchtende Portal in ihrem Zimmer. Nutze den Spielernamen ${playerName} natürlich im Text.`
  }

  const historyText = choiceHistory
    .map((c, i) => `  ${i + 1}. ${c}`)
    .join('\n')

  return `Spielername: ${playerName}
Letzte Entscheidung: "${lastChoice}"
Bisherige Entscheidungen:
${historyText}

Schreibe die nächste Szene basierend auf der letzten Entscheidung. Baue logisch auf dem bisherigen Verlauf auf.`
}
