<template lang="pug">
.iconRadio.columns.is-mobile
  .column(v-for="(option, index) in options", :key="index")
    label.label.iconRadio-core
      input.iconRadio-input(type="radio", :value="option.value", v-model="currentValue")
      FontAwesomeIcon.icon.iconRadio-icon.is-large(:icon="option.icon", :style="getElementStyle(index, 'icon')")
      span.iconRadio-label.has-text-centered(:style="getElementStyle(index, 'label')") {{option.label}}
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'IconRadio',
  components: {
    FontAwesomeIcon
  },
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    styles: {
      type: Array,
      required: false,
      default: () => ([])
    },
    highlightOnInit: {
      type: Boolean,
      required: false,
      default: false
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

  },
  methods: {
    getElementStyle (index, type) {
      const state =
        (this.highlightOnInit && this.value === '') ||
        this.value === this.options[index].value ? 'on' : 'off'
      return this.styles[index][type][state]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/variables'
@import '~bulma/sass/utilities/mixins'

.iconRadio-core
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  cursor: pointer

.iconRadio-input
  display: none

.iconRadio-label
  text-transform: uppercase
  max-width: 100%
  margin: 0.4em auto

  +until($mobile-small)
    font-size: 0.8em

  +until($mobile)
    width: 100%

  +from($desktop)
    margin-left: 2em

</style>
