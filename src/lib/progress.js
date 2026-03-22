import { supabase } from './supabase'

const SESSION_KEY = 'lina_session_token'

function getOrCreateSessionToken() {
  let token = localStorage.getItem(SESSION_KEY)
  if (!token) {
    token = crypto.randomUUID()
    localStorage.setItem(SESSION_KEY, token)
  }
  return token
}

export async function saveProgress({ playerName, sceneId, choiceHistory, storyPhase = 'exploration', companions = [] }) {
  const sessionToken = getOrCreateSessionToken()

  const { error } = await supabase
    .from('player_progress')
    .upsert(
      {
        player_name:      playerName,
        current_scene_id: sceneId,
        choice_history:   choiceHistory,
        story_phase:      storyPhase,
        companions:       companions,
        session_token:    sessionToken,
      },
      { onConflict: 'session_token' }
    )

  if (error) throw error
  return true
}

export async function loadProgress(playerName) {
  const { data, error } = await supabase
    .from('player_progress')
    .select('*')
    .eq('player_name', playerName)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) throw error
  return data // null if no save found
}

export async function hasSave(playerName) {
  if (!playerName.trim()) return false
  const save = await loadProgress(playerName)
  return save !== null
}
