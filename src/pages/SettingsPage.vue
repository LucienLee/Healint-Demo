<template lang="pug">
.container
  h2.title.is-6
    span.icon: FontAwesomeIcon(icon="sort-down")
    span Edit Your Treatment Shortcuts
  .box.is-paddingless
    table.table.is-fullwidth.is-radius
      thead
        tr
          th
          th Treatment
          th Type
      tbody
        tr(v-for="(setting, index) in settings")
          td
            ToggleSwitch(:value="setting.status", @input="updateStatus(index, $event)")
          td.is-size-7-mobile {{ setting.name }}
          td
            DropdownMenu(:value="setting.customType" @input="updateCustomType(index, $event)" :options="customType")

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import ToggleSwitch from '@/components/ToggleSwitch'
import DropdownMenu from '@/components/DropdownMenu'
import customType from '@/constants/customType'

export default {
  name: 'SettingsPage',
  components: {
    ToggleSwitch,
    DropdownMenu,
    FontAwesomeIcon
  },
  data () {
    return {
      customType
    }
  },
  computed: {
    settings () {
      return this.$store.state.settings
    }
  },
  methods: {
    updateStatus (id, status) {
      this.$store.dispatch('changeSettings', {
        id,
        status
      })
    },
    updateCustomType (id, customType) {
      this.$store.dispatch('changeSettings', {
        id,
        customType
      })
    }
  }
}
</script>

<style lang="sass">
@import '../sass/variables'
.is-radius
  border-radius: $radius-large

td
  vertical-align: middle
</style>
