<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Parrot Body',
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
