import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ─── Ending scene prompts (5 cinematic scenes, no player choices) ─────────────
const ENDING_SCENE_PROMPTS = {
  1: {
    title: 'Der entscheidende Moment',
    mood: 'exciting',
    scene_id: 'ending_decisive',
    prompt: () => `Schreibe die entscheidende finale Szene.
Dario hält Grill den Hammer mit seinem leuchtenden Schwert in Schach.
Rumpels Kobold-Magie spinnt goldene Fäden um Grill, die ihn verlangsamen.
Lina sieht die Chance: Grills goldener BBQ-Anhänger – seine Schwachstelle – glänzt in der Sonne.
Sie rennt, springt, reißt den Anhänger herunter. Ein grelles Licht blendet alle.
Dann: Stille. Nur das leise Knistern von Zuckerwatte in der Luft.
Schreibe dies cinematisch und spannend, 4-6 Sätze, Tagebuch-Stil von Lina.
Keine Entscheidungen. Mood: exciting. Kein JSON, nur Text.`,
  },
  2: {
    title: 'Grill den Hammer wird zu Zuckerwatte',
    mood: 'funny',
    scene_id: 'grill_transformation',
    prompt: () => `Grill den Hammer verwandelt sich langsam in Zuckerwatte – von den Füßen aufwärts!
Zuerst werden seine Schuhe rosa und flauschig. Dann seine Beine. Er starrt ungläubig runter.
Er ist zuerst wütend: "Das kann nicht sein! ICH BIN GRILL DEN HAMMER!"
Dann verwirrt: er riecht an sich selbst... nach Erdbeere?
Dann irgendwie... damit einverstanden: "Okay. Okay. Das ist eigentlich... recht angenehm."
Sein allerletzter Satz ist ein lächerlicher BBQ-Rap-Reim (kurz, dumm, lustig).
Dann: Seine Handlanger starren ihn an. Einer zuckt mit den Schultern. Und beißt ein Stück von seinem ehemaligen Chef ab.
Schreibe warm, witzig, kindgerecht. 5-7 Sätze, Tagebuch-Stil von Lina. Kein JSON, nur Text.`,
  },
  3: {
    title: 'Das große Fest',
    mood: 'happy',
    scene_id: 'das_grosse_fest',
    prompt: () => `Das große Fest in Zuckerwatten-Land! Alle feiern!
Zeige jeden dieser Momente kurz aber lebendig:
- Sophie und Malaika stehen zusammen und planen lautstark ihr nächstes chaotisches Abenteuer
- Marley rennt bellend im Kreis – pure, grenzenlose Hundefreude
- Dugu schwebt still und zufrieden über allem und gibt ab und zu ein leises "Miau" von sich
- Alex will bei der Riesentorte helfen, tritt aber gegen das Tablett – die Torte fällt in hohem Bogen. Alle lachen statt böse zu sein.
- Karin stimmt ein Siegeslied an. Beschreibe wie es klingt und was es mit den Leuten macht, ohne es auszuschreiben.
- Annette kommt zu Lina, sagt nichts, gibt ihr nur einen kurzen wissenden Blick und nickt.
- Nura Liya drückt Lina sanft eine kleine, warm leuchtende Kugel in die Hand: "Die Leuchtkugel. Für deinen Weg."
- Dario und Rumpel winken und verschwinden langsam, als würden sie in die Luft aufgehen, zurück in ihre Welt.
Schreibe warm, feierlich und voll. Tagebuch-Stil von Lina. Kein JSON, nur Text.`,
  },
  4: {
    title: 'Emmi und Lina',
    mood: 'happy',
    scene_id: 'emmi_und_lina',
    prompt: () => `Ein stiller Moment, nur Emmi und Lina. Alle anderen sind etwas weiter weg.
Emmi ist nach außen hin cool – Hände in den Taschen, schaut zur Seite.
Aber man spürt, dass sie emotional ist. Sie kämpft dagegen an.
Sie gibt Lina den Emmi-Sticker: einen kleinen silbernen Punk-Stern.
Kurze, knappe Dialoge – Emmi hält keine langen Reden. Maximal 2-3 kurze Sätze von ihr.
Der letzte Satz der Szene: Emmi macht einen Kickflip auf ihrem Skateboard und zeigt mit dem Finger auf das Portal:
"Los, Lina. Du schaffst das."
Schreibe emotional aber nicht kitschig. Tagebuch-Stil von Lina. Kein JSON, nur Text.`,
  },
  5: {
    title: 'Nach Hause',
    mood: 'happy',
    scene_id: 'heimkehr',
    prompt: (name) => `${name} tritt durch das leuchtende Portal zurück in ihr Zimmer.
Alles ist genau so wie sie es verlassen hat. Ihr Bett. Ihr Schreibtisch. Die vertrauten Geräusche der echten Welt.
Sie schaut auf ihre Hand – und da ist er: Emmis Punk-Stern-Sticker. Wirklich. Echt.
Schreibe den letzten Tagebucheintrag von ${name}:
Sie weiß, dass es niemand glauben würde.
Aber sie weiß, dass es wahr war. Jede Sekunde davon.
Der allerletzte Satz ist offen und magisch – er deutet an, dass das Portal vielleicht eines Tages wieder erscheinen könnte.
Poetisch, warm, befriedigend. Dies ist das Ende des Buches. Tagebuch-Stil von ${name}. Kein JSON, nur Text.`,
  },
}

// ─── Main story system prompt ──────────────────────────────────────────────────
const SYSTEM_PROMPT = `Du bist der Erzähler eines deutschen Kinderbuch-Abenteuers für 7-jährige Kinder.
Das Spiel heißt "Lina im Zuckerwatten-Land".

═══ WELT ═══
Zuckerwatten-Land ist eine magische Welt, in der alles aus Zuckerwatte besteht – Wolken, Bäume, Häuser, Flüsse aus Marshmallow-Schaum. Lina erreicht diese Welt durch ein leuchtendes Portal in ihrem Zimmer.

═══ TON ═══
- Warm, niedlich, magisch – gelegentlich leicht gruselig (kindgerecht für 7-Jährige)
- Kurze, lebendige Sätze im Tagebuch-Stil, als würde Lina selbst erzählen
- Immer auf Deutsch.
- WICHTIG: Die Heldin heißt IMMER "Lina" – niemals der Spielername. Der Spielername wird nur zum Speichern verwendet und darf NICHT im Erzähltext erscheinen.

═══ CHARAKTERE ═══
- Lina: neugieriges, mutiges Mädchen aus der echten Welt
- Emmi: Pop-Punk-Skaterin mit Spitzhut, denkt wie Avril Lavigne, wirkt mächtige Zauber
- Sophie & Malaika: ulkige Kriegerprinzessinnen, kämpfen lachend und chaotisch
- Grill den Hammer: Hauptbösewicht, Gangster-Rapper, will Zuckerwatten-Land in einen riesigen Grill verwandeln – SEHR schwer zu besiegen, kommt DREIMAL zurück
- Die Handlanger: Grills Schergen, langsam und dumm, stolpern ständig
- Annette: coole Lehrerin Anfang 30 mit Brille, hilft bei Rätseln
- Alex: 50-jähriger Clown mit Brille und Jim-Carrey-Gesicht, will helfen, richtet Chaos an
- Karin: Ende 40, lange schwarze Haare, Brille, magische Singstimme
- Nura Liya: kleine aber mächtige Heilerin mit strahlenden Händen
- Marley: sprechender Golden-Retriever-Welpe, pure Freude und Loyalität
- Dugu: freundliches Katzengespenst, schwebt durch die Gegend
- Dario: kreativer Abenteurer aus den Koboldkroniken, kämpft mit einem magischen Schwert
- Rumpel: kleiner Kobold aus den Koboldkroniken, meisterhafter Kobold-Zauberer

═══ VOLLSTÄNDIGER STORY-BOGEN ═══

PHASE 1 – exploration (2-3 Szenen):
Lina entdeckt das Portal, springt hindurch, staunt über Zuckerwatten-Land.
→ Wechsle zu "gathering" nach 2-3 Szenen.

PHASE 2 – gathering (6-8 Szenen):
Lina trifft ihre Gefährten und sammelt sie ein. Stelle sie nacheinander vor.
Reihenfolge (flexibel): Emmi → Marley → Sophie & Malaika → Karin → Nura Liya → Annette & Alex → Dugu.
Trage neue Gefährten in "new_companions" ein.
→ Wechsle zu "march_to_festung" sobald mind. 5 Gefährten dabei sind.

PHASE 3 – march_to_festung (2-3 Szenen):
Die Gruppe marschiert zu Grills Festung. Handlanger werden lustig besiegt.
→ Wechsle zu "battle_1" wenn sie ankommen.

PHASE 4 – battle_1 (2-3 Szenen):
ERSTER KAMPF. Grill fällt. Alle feiern. Dann steht er wieder auf...
→ Wechsle zu "battle_2".

PHASE 5 – battle_2 (2 Szenen):
GRILL STEHT WIEDER AUF. Zweiter Kampf, schwieriger. Grill fällt nochmal. Dann bewegt er sich wieder...
→ Wechsle zu "battle_despair".

PHASE 6 – battle_despair (1-2 Szenen):
Grill steht zum DRITTEN MAL auf. Alle erschöpft. Alles scheint verloren.
→ Wechsle zu "dario_rumpel_arrive".

PHASE 7 – dario_rumpel_arrive (1 Szene):
Dario und Rumpel erscheinen! Sie kennen Grills Schwäche: sein goldener BBQ-Anhänger!
scene_id MUSS "dario_rumpel_arrive" sein.
choices: [{"id":"a","text":"Los geht's – alle zusammen!"}]
→ story_phase: "final_victory"

PHASE 8 – final_victory (1-2 Szenen):
Der Sieg zeichnet sich ab. Alle kämpfen. Grill ist geschwächt.
Endet mit dem letzten großen Moment kurz bevor Lina den Anhänger entreißt.
→ story_phase: "homecoming" (triggert die cinematic Ending-Sequenz im Frontend)

PHASE 9 – homecoming:
Wird als cinematic Sequenz im Frontend gehandhabt. Keine normalen Szenen mehr.

═══ AUSGABEFORMAT (immer als JSON, kein Markdown) ═══
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
  "scene_id": "kurzer_bezeichner_ohne_leerzeichen",
  "story_phase": "exploration | gathering | march_to_festung | battle_1 | battle_2 | battle_despair | dario_rumpel_arrive | final_victory | homecoming",
  "new_companions": ["Name"]
}`

// ─── Ending scene system prompt ───────────────────────────────────────────────
const ENDING_SYSTEM_PROMPT = `Du bist der Erzähler eines deutschen Kinderbuchs für 7-jährige Kinder.
Du schreibst gerade die finalen Szenen des Abenteuers "Lina im Zuckerwatten-Land".
Dies sind cinematic Szenen ohne Spielerentscheidungen.
Schreibe emotional, warm und befriedigend.
Tagebuch-Stil – als würde Lina selbst erzählen.
Immer auf Deutsch. 4-7 Sätze pro Szene.`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ message: 'Server-Konfigurationsfehler: API-Key fehlt.' })
  }

  const {
    playerName,
    choiceHistory = [],
    lastChoice = null,
    storyPhase = 'exploration',
    companions = [],
    endingSceneNumber = null,
  } = req.body

  if (!playerName) return res.status(400).json({ message: 'playerName is required' })

  // ── Ending scene path ──────────────────────────────────────────────────────
  if (endingSceneNumber && ENDING_SCENE_PROMPTS[endingSceneNumber]) {
    const scene = ENDING_SCENE_PROMPTS[endingSceneNumber]
    try {
      const message = await client.messages.create({
        model: 'claude-haiku-4-5',
        max_tokens: 600,
        system: ENDING_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: scene.prompt(playerName) }],
      })
      return res.status(200).json({
        scene_text:     message.content[0].text.trim(),
        character:      null,
        character_line: null,
        mood:           scene.mood,
        scene_id:       scene.scene_id,
        choices:        [],
        story_phase:    'homecoming',
        new_companions: [],
      })
    } catch (err) {
      console.error('ending-scene error:', err?.message)
      return res.status(500).json({ message: `Fehler: ${err?.message ?? 'Unbekannter Fehler'}` })
    }
  }

  // ── Normal story path ──────────────────────────────────────────────────────
  const userMessage = buildUserMessage({ playerName, choiceHistory, lastChoice, storyPhase, companions })

  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    })

    const raw     = message.content[0].text.trim()
    const jsonStr = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
    const parsed  = JSON.parse(jsonStr)

    if (!Array.isArray(parsed.new_companions)) parsed.new_companions = []
    return res.status(200).json(parsed)
  } catch (err) {
    console.error('generate-scene error:', err?.message ?? err)
    return res.status(500).json({ message: `Fehler beim Generieren der Szene: ${err?.message ?? 'Unbekannter Fehler'}` })
  }
}

function buildUserMessage({ playerName, choiceHistory, lastChoice, storyPhase, companions }) {
  const companionList = companions.length > 0
    ? `Aktuelle Gefährten: ${companions.join(', ')}`
    : 'Noch keine Gefährten gesammelt.'

  const phaseGuidance = PHASE_GUIDANCE[storyPhase] ?? ''

  if (choiceHistory.length === 0) {
    return `Spielername: ${playerName}
Aktuelle Story-Phase: ${storyPhase}
${companionList}

Dies ist der Beginn des Abenteuers.
${phaseGuidance}

Schreibe die erste Szene: Lina entdeckt das leuchtende Portal in ihrem Zimmer.`
  }

  const historyText = choiceHistory.map((c, i) => `  ${i + 1}. ${c}`).join('\n')

  return `Spielername: ${playerName}
Aktuelle Story-Phase: ${storyPhase}
${companionList}
Letzte Entscheidung: "${lastChoice}"
Bisherige Entscheidungen (${choiceHistory.length} gesamt):
${historyText}

${phaseGuidance}

Schreibe die nächste Szene. Beachte die Phase-Anweisungen genau.`
}

const PHASE_GUIDANCE = {
  exploration: `PHASE: exploration
Lina erkundet gerade zum ersten Mal Zuckerwatten-Land. Alles ist neu und wundersam.
Schreibe 2-3 Erkundungsszenen, dann wechsle story_phase zu "gathering".`,

  gathering: `PHASE: gathering
Stelle in dieser Szene einen neuen Gefährten vor und trage ihn in "new_companions" ein.
Wechsle zu "march_to_festung" sobald mind. 5 Gefährten gesammelt sind.`,

  march_to_festung: `PHASE: march_to_festung
Die Gruppe marschiert zu Grills Festung. Handlanger werden lustig besiegt.
Wechsle zu "battle_1" wenn sie ankommen.`,

  battle_1: `PHASE: battle_1 – ERSTER KAMPF
Grill erscheint, kämpft, fällt. Alle feiern. Dann: er steht wieder auf...
→ wechsle zu "battle_2".`,

  battle_2: `PHASE: battle_2 – GRILL STEHT WIEDER AUF
Zweiter Kampf, noch schwieriger. Lina findet eine Lücke. Grill fällt nochmal.
Dann bewegt sich Grill wieder... → wechsle zu "battle_despair".`,

  battle_despair: `PHASE: battle_despair – ALLES SCHEINT VERLOREN
Grill steht zum DRITTEN MAL auf. Alle erschöpft. Düster aber kindgerecht.
→ wechsle zu "dario_rumpel_arrive".`,

  dario_rumpel_arrive: `PHASE: dario_rumpel_arrive – DIE ÜBERRASCHUNG
Dario und Rumpel erscheinen! Sie kennen Grills geheime Schwäche: seinen goldenen BBQ-Anhänger!
scene_id MUSS "dario_rumpel_arrive" sein.
choices: [{"id":"a","text":"Los geht's – alle zusammen!"}]
→ story_phase: "final_victory"`,

  final_victory: `PHASE: final_victory – ALLE KÄMPFEN ZUSAMMEN
Der Endkampf läuft. Grill ist geschwächt durch Dario und Rumpel.
Endet knapp bevor Lina den Anhänger entreißt – der nächste Schritt ist die Ending-Sequenz.
→ story_phase: "homecoming"`,

  homecoming: `PHASE: homecoming
Die cinematic Ending-Sequenz wird im Frontend gehandhabt.
Gib eine kurze Übergangsszene: das Zuckerwatten-Land-Fest beginnt.
story_phase: "homecoming", choices: []`,
}
