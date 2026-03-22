// Vercel serverless function — keeps ANTHROPIC_API_KEY server-side
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { sceneId, playerName, choiceHistory, systemPrompt } = req.body

  if (!sceneId || !playerName) {
    return res.status(400).json({ message: 'sceneId and playerName are required' })
  }

  try {
    const message = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system: systemPrompt || buildDefaultSystemPrompt(),
      messages: [
        {
          role: 'user',
          content: buildUserPrompt({ sceneId, playerName, choiceHistory }),
        },
      ],
    })

    const text = message.content[0].text
    // Expected JSON shape: { narrative: string, choices: Array<{ id: string, label: string }> }
    const parsed = JSON.parse(text)
    return res.status(200).json(parsed)
  } catch (err) {
    console.error('Claude API error:', err)
    return res.status(500).json({ message: 'Fehler beim Generieren der Szene.' })
  }
}

function buildDefaultSystemPrompt() {
  return `Du bist der Erzähler eines interaktiven Kinderbuchs auf Deutsch für 7-Jährige.
Das Spiel heißt "Lina im Zuckerwatten-Land".
Schreibe lebendige, fröhliche Szenen im Stil eines Tagebuchs – neugierig, warm und leicht witzig.
Gelegentlich darf es leicht gruselig sein, aber immer altersgerecht.
Antworte NUR mit validem JSON in diesem Format:
{
  "narrative": "<2-4 kurze Absätze Erzähltext>",
  "choices": [
    { "id": "a", "label": "<kurze Wahlmöglichkeit>" },
    { "id": "b", "label": "<kurze Wahlmöglichkeit>" },
    { "id": "c", "label": "<kurze Wahlmöglichkeit>" }
  ]
}`
}

function buildUserPrompt({ sceneId, playerName, choiceHistory }) {
  const history = choiceHistory?.length
    ? `\nBisherige Entscheidungen: ${choiceHistory.join(' → ')}`
    : ''
  return `Spielername: ${playerName}\nSzene: ${sceneId}${history}\n\nSchreibe die nächste Szene.`
}
