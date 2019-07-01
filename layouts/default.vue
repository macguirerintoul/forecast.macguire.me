<template>
  <div id="container">
    <Navigation />
    <nuxt />
  </div>
</template>
<script>
// eslint-disable-next-line
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>
