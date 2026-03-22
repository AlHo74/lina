// Claude API calls are proxied through a Vercel serverless function
// to keep the API key server-side only.
// See: /api/generate-scene.js

export async function generateScene({ sceneId, playerName, choiceHistory, systemPrompt }) {
  const response = await fetch('/api/generate-scene', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sceneId, playerName, choiceHistory, systemPrompt }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Fehler beim Laden der Geschichte.')
  }

  return response.json()
}
