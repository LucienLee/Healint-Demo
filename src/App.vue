<template lang="pug">
  #app
    NavBar(:title="title")
    section.section
      TabBar(:value="selected", @input="handleTabBarSelected")
        TabBarItem(id="recent") Recent
        TabBarItem(id="trend") Trend
        TabBarItem(id="settings")
          FontAwesomeIcon.icon.is-small(icon="cog")
          | Settings
      div.has-text-centered(v-if="isLoading")
        FontAwesomeIcon.icon.is-medium(icon="spinner", spin)
      router-view
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import router from '@/router'
import NavBar from '@/components/NavBar'
import TabBar from '@/components/TabBar'
import TabBarItem from '@/components/TabBarItem'

import '@/sass/bulma.sass'

export default {
  name: 'App',
  components: {
    NavBar,
    TabBar,
    TabBarItem,
    FontAwesomeIcon
  },
  data () {
    return {
      title: 'Parrot Body',
      selected: this.$route.name,
      isLoading: true
    }
  },
  created () {
    Promise.all([
      this.$store.dispatch('getSettings'),
      this.$store.dispatch('getRecords')
    ]).then(() => {
      this.isLoading = false
    })
  },
  methods: {
    handleTabBarSelected (selectedID) {
      this.selected = selectedID
      router.push({ name: selectedID })
    }
  }
}
</script>

<style lang="sass">
#app
  padding-top: 3.25em
</style>
