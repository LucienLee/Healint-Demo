import { fetchSettings, updateSettings } from '@/firebase'

export default {
  async getSettings ({ commit }) {
    commit('SET_LOADING', { isLoading: true })
    const settings = await fetchSettings()
    commit('SET_SETTINGS', { settings })
    commit('SET_LOADING', { isLoading: false })
  },
  async changeSettings ({ commit, state }, changes) {
    const settings = {...state.settings[changes.id], ...changes}
    await updateSettings(settings)
    commit('UPDATE_SETTINGS', { settings })
  },
  changeLoading ({ commit }, isLoading) {
    commit('SET_LOADING', { isLoading })
  }
}
