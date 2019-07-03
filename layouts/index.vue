<template>
  <div id="container">
    <Navigation />
    <div id="index-showcase">
      <div>
        <nuxt />
      </div>
      <div id="demo">
        <div class="titlebar">
          <div class="buttons">
            <div class="close">
              <a class="closebutton" href="#"
                ><span><strong>x</strong></span></a
              >
              <!-- close button link -->
            </div>
            <div class="minimize">
              <a class="minimizebutton" href="#"
                ><span><strong>&ndash;</strong></span></a
              >
              <!-- minimize button link -->
            </div>
            <div class="zoom">
              <a class="zoombutton" href="#"
                ><span><strong>+</strong></span></a
              >
              <!-- zoom button link -->
            </div>
          </div>
          Forecast
          <!-- window title -->
        </div>
        <div id="app-container">
          <DemoApp />
        </div>
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
  // styles for window

  .titlebar {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, #ebebeb, color-stop(1, #d5d5d5))
    );
    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
    background: linear-gradient(top, #ebebeb, #d5d5d5);
    color: #4d494d;
    font-size: 11pt;
    line-height: 20px;
    text-align: center;
    width: 100%;
    height: 20px;
    border-top: 1px solid #f3f1f3;
    border-bottom: 1px solid #b1aeb1;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
  }

  .buttons {
    padding-left: 8px;
    padding-top: 3px;
    float: left;
    line-height: 0px;
  }

  .buttons:hover a {
    visibility: visible;
  }

  .close {
    background: #ff5c5c;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
  }

  .close:active {
    background: #c14645;
    border: 1px solid #b03537;
  }

  .close:active .closebutton {
    color: #4e0002;
  }

  .closebutton {
    color: #820005;
    visibility: hidden;
    cursor: default;
  }

  .minimize {
    background: #ffbd4c;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 4px;
    width: 11px;
    height: 11px;
    border: 1px solid #e09e3e;
    border-radius: 50%;
    display: inline-block;
  }

  .minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
  }

  .minimize:active .minimizebutton {
    color: #5a2607;
  }

  .minimizebutton {
    color: #9a5518;
    visibility: hidden;
    cursor: default;
  }

  .zoom {
    background: #00ca56;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 6px;
    width: 11px;
    height: 11px;
    border: 1px solid #14ae46;
    border-radius: 50%;
    display: inline-block;
  }

  .zoom:active {
    background: #029740;
    border: 1px solid #128435;
  }

  .zoom:active .zoombutton {
    color: #003107;
  }

  .zoombutton {
    color: #006519;
    visibility: hidden;
    cursor: default;
  }
  // end styles for window
  #app-container {
    height: 35em;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
}
</style>
