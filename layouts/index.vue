<template>
  <div id="container">
    <Navigation />
    <div id="index-showcase">
      <div style="width: 50%">
        <nuxt />
      </div>
      <div style="width: 50%">
        <h6>the demo goes here</h6>
      </div>
    </div>
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

<style lang="scss" scoped>
#index-showcase {
  display: flex;
}
</style>
