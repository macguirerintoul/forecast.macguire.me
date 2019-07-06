<template>
  <div id="container">
    <Header />
    <div id="index-showcase">
      <div>
        <nuxt />
      </div>
      <div id="demo">
        <div class="window">
          <div class="window__bar">Forecast</div>
          <div id="app-container">
            <DemoApp />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// eslint-disable-next-line
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// import the app components
import DemoApp from '../components/DemoApp.vue'

export default {
  components: {
    Header,
    Footer,
    DemoApp,
  },
}
</script>

<style lang="scss" scoped>
#demo {
  // styles for macos-style window
  $border-radius: 6px;
  $btn-radius: 7px;

  * {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(to right, #936b78 0%, #6a6f91 100%);
    padding: 20px;
  }

  .window {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: $border-radius;

    &__bar {
      border-bottom-color: #bdbdbd;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
      height: 20px;
      text-align: center;
      color: #505151;
      font-size: 12px;
      line-height: 20px;
      vertical-align: middle;
      background: radial-gradient(
          $btn-radius at 14px 50%,
          #ff5e57 0px,
          #ff635a ($btn-radius - 2),
          #fd5249 ($btn-radius - 1),
          rgba(255, 255, 255, 0) $btn-radius
        ),
        radial-gradient(
          $btn-radius at 34px 50%,
          #ffbd2e 0px,
          #ffc42f ($btn-radius - 2),
          #fcb91b ($btn-radius - 1),
          rgba(255, 255, 255, 0) $btn-radius
        ),
        radial-gradient(
          $btn-radius at 54px 50%,
          #cfcfcf 0px,
          #d3d3d3 ($btn-radius - 2),
          #c6c6c6 ($btn-radius - 1),
          rgba(255, 255, 255, 0) $btn-radius
        ),
        linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
    }
  }
  // end styles for window
  #app-container {
    height: 35em;
    overflow: scroll;
  }
}
</style>
