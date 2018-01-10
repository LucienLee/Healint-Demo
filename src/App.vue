<template lang="pug">
  #app
    //- <BaseHeader/>
    <BaseSwitch v-model="value"/>
    router-view
</template>

<script>
import BaseSwitch from '@/components/BaseSwitch'

export default {
  name: 'App',
  components: {
    BaseSwitch
  },
  data () {
    return {
      title: 'Parrot Body',
      value: false
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
