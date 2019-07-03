<template>
  <div id="container">
    <Navigation />
    <div id="index-showcase">
      <div style="width: 50%">
        <nuxt />
      </div>
      <div style="width: 50%">
        <DemoApp />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Navigation from '../components/Navigation.vue'

// import the app components
import DemoApp from '../components/DemoApp.vue'

export default {
  components: {
    Navigation,
    DemoApp,
  },
}
</script>

<style lang="scss" scoped>
#index-showcase {
  display: flex;
}
</style>
