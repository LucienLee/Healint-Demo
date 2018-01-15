import { fetchSettings, updateSettings, fetchRecords, updateRecord } from '@/firebase'

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
  async getRecords ({ commit }) {
    commit('SET_LOADING', { isLoading: true })
    const records = await fetchRecords()
    records.map(record => {
      if (record.dayExists) {
        record.treatment = record.treatment ? Object.keys(record.treatment) : []
      }
      return record
    })
    commit('SET_RECORDS', { records })
    commit('SET_LOADING', { isLoading: false })
  },
  async changeRecord ({ commit, state }, record) {
    commit('SET_LOADING', { isLoading: true })
    const normalized = {
      ...record,
      treatment: record.treatment.reduce((acc, cur) => ({
        ...acc,
        [cur]: true
      }), {})
    }
    try {
      await updateRecord(normalized)
      commit('UPDATE_RECORD', { record })
      commit('SET_LOADING', { isLoading: false })
      return record
    } catch (e) {
      return e
    }
  }
}
