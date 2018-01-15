export default {
  SET_SETTINGS (state, { settings }) {
    state.settings = settings
  },
  UPDATE_SETTINGS (state, { settings }) {
    const {id: _, ...changedSettings} = settings
    state.settings[settings.id] = changedSettings
  },
  SET_RECORDS (state, { records }) {
    state.records = records
  },
  UPDATE_RECORD (state, { record }) {
    const {id: _, ...changedRecord} = record
    state.records[record.id] = changedRecord
  },
  SET_LOADING (state, { isLoading }) {
    state.isLoading = isLoading
  }
}
