<template lang="pug">
li.tabBar-item(@click="$parent.$emit('input', id)", :class="{ 'is-active': $parent.value === id }")
  a
    slot
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/mixins'

.tabBar-item
  +touch
    flex: 1
</style>
