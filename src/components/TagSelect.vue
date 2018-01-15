<template lang="pug">
.tagSelect
  .tags.tagSelect-tags
    label.tag.tagSelect-tag(v-for="tag in filteredOptions", :class="{'is-inverted': currentValue.indexOf(tag.name) === -1}") {{tag.name}}
      input.tagSelect-input(type="checkbox", :value="tag.name", v-model="currentValue" )
  a.tagSelect-more(v-show="!isShowAll", @click.prevent="handleClick") Show All...
</template>

<script>
export default {
  name: 'TagSelect',
  props: {
    value: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isShowAll: false
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
    },
    filteredOptions () {
      return this.isShowAll
        ? this.options
        : this.options.filter(option => option.status || this.value.indexOf(option.name) !== -1)
    }
  },
  methods: {
    handleClick () {
      this.isShowAll = true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/variables'

.tagSelect
  text-align: center

.tagSelect-tag
  border: 1px solid $blue
  background-color: $blue

  &.is-inverted
    background-color: transparent

.tagSelect-tags
  margin: 0

.tagSelect-input
  display: none

</style>
