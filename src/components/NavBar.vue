<template lang="pug">
nav.navbar.is-fixed-top(role="navigation" aria-label="main navigation")
  .navbar-brand
    h1.navbar-item.title.is-4 {{title}}
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar-brand
  justify-content: center
</style>
