<template>
  <div id="container">
    <Navigation />
    <div id="index-showcase">
      <div>
        <nuxt />
      </div>
      <div id="demo">
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
  justify-content: space-between;
  & > div {
    width: 48%;
  }
}
#demo {
  height: 35em;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
}
</style>
