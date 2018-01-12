export default {
  SET_SETTINGS (state, { settings }) {
    state.settings = settings
  },
  UPDATE_SETTINGS (state, { settings }) {
    const {id: _, ...changedSettings} = settings
    state.settings[settings.id] = changedSettings
  },
  SET_LOADING (state, { isLoading }) {
    state.isLoading = isLoading
  }
}
