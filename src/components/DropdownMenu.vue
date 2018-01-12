<template lang="pug">
.select.is-small
  select(v-model="selected")
    option(v-for="option in options") {{ option }}
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Dropdown',
  components: {
    FontAwesomeIcon
  },
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    selected: {
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
</style>
