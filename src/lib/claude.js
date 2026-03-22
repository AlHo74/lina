/**
 * Calls the Vercel serverless function that wraps Claude.
 * The API key never touches the browser — it lives in /api/generate-scene.js only.
 */
export async function generateScene({ playerName, choiceHistory = [], lastChoice = null, storyPhase = 'exploration', companions = [] }) {
  const response = await fetch('/api/generate-scene', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerName, choiceHistory, lastChoice, storyPhase, companions }),
  })

  if (!response.ok) {
    let msg = 'Fehler beim Laden der Geschichte.'
    try {
      const json = await response.json()
      msg = json.message ?? msg
    } catch { /* ignore */ }
    throw new Error(msg)
  }

  return response.json()
}
