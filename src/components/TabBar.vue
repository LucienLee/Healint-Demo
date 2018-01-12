<template lang="pug">
.tabs.is-centered
  ul
    slot
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
