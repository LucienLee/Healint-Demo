<template lang="pug">
label.switch
  input.switch-input(@change="$emit('change', currentValue)", type='checkbox', v-model='currentValue')
  span.switch-core
  .switch-label
    slot
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/var'

$width: 52px
$height: 32px
$border-size: 1px
$knob-size: $height - $border-size * 2

.switch
  display: flex
  align-items: center
  position: relative

.switch-label
  margin-left: 10px
  display: inline-block
  &:empty
    margin-left: 0

.switch-input
  display: none

  &:checked + .switch-core
    border-color: $primary
    background-color: $primary

    &::before
      transform: scale(0)

    &::after
      transform: translateX($width - $knob-size - 2 * $border-size)

.switch-core
  display: inline-block
  position: relative
  width: $width
  height: $height
  border: 1px solid $grey-light
  border-radius: $height / 2
  box-sizing: border-box
  background: $grey-light

  &::after, &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    transition: transform .3s
    border-radius: $knob-size / 2

  &::after
    width: $knob-size
    height: $knob-size
    background-color: $white
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4)

  &::before
    width: $width - $border-size * 2
    height: $height - $border-size * 2
    background-color: #fdfdfd
</style>
