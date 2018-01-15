<template lang="pug">
transition(name="slide-fade")
  .popNotification.notification.is-dark(v-if="show")
    slot
</template>

<script>
export default {
  name: 'PopNotification',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/variables'

.popNotification
  position: fixed
  bottom: 1em
  width: calc(100% - #{$section-horizontal-padding*2})

.slide-fade-enter-active, .slide-fade-leave-active
  transition: opacity .5s, transform .5s

.slide-fade-enter, .slide-fade-leave-to
  opacity: 0
  transform: translateY(50%)
</style>
