<template>
  <div id="app">
    <NewEvent></NewEvent>
    <notifications group="forecast" position="bottom center" />
    <swipe-list
      id="events-container"
      ref="list"
      :items="events"
      transition-key="_id"
    >
      <template v-slot="{ item, index, revealLeft, revealRight, close }">
        <Event
          :index="index"
          :title="item.title"
          :due="item.due"
          @rightClick="eventRightClick(index)"
          @eventClicked="eventClicked(index)"
        />
      </template>
      <template v-slot:right="{ item }">
        <div class="swipeout-action" @click="removeEvent(item._id)">
          <img src="../static/check.svg" alt="complete" />
        </div>
      </template>
      <div id="empty" slot="empty">
        <div id="icon">
          <img width="96" src="../static/icon.png" alt="Forecast icon" />
        </div>
        <h1>Welcome to Forecast.</h1>
        <h2>Here's how to use it.</h2>
        <ol>
          <li>Scroll up to add an item</li>
          <li>Choose a title</li>
          <li>Choose a date</li>
          <li>Hit enter or click create</li>
          <li>Drag items left (or right-click) to complete them</li>
        </ol>
        <div id="links">
          <h6>
            Created by
            <a href="https://mrintoul.com">Macguire Rintoul</a>
          </h6>
          <h6>
            View on
            <a href="https://github.com/mrintoul/forecast">GitHub</a>
          </h6>
        </div>
      </div>
    </swipe-list>
  </div>
</template>

<script>
import { SwipeList } from 'vue-swipe-actions'
import 'vue-swipe-actions/dist/vue-swipe-actions.css'
import Event from './Event.vue'
import NewEvent from './NewEvent.vue'

export default {
  name: 'DemoApp',
  components: {
    Event,
    NewEvent,
    SwipeList,
  },
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    console.log('demo app mounted')
    document.getElementById('demo').scrollTop = 136
  },
  methods: {
    eventRightClick(index) {
      // eslint-disable-next-line
      const list = this.$refs.list
      if (list.isRevealed(index) === 'right') {
        list.closeActions(index)
      } else {
        list.revealRight(index)
      }
    },
    addEvent(title, due) {
      this.events.push({
        // eslint-disable-next-line
        title,
        due,
      })
      console.log('Event added')
      this.events.sort((a, b) => {
        // console.log(a.due.diff(b.due));
        return a.due.diff(b.due)
      })
    },
    removeEvent(id) {
      console.log('Removing event ', id)
      // eslint-disable-next-line
      const index = this.events.findIndex(object => object._id == id)
      console.log(index)
      this.events.splice(index, 1)
    },
  },
}
</script>

<style lang="scss">
$bg-light: #fff;
$light-grey: #eee;
$placeholder: #aaa;
$el-dark: #000;
$font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif;

html,
body {
  margin: 0;
  min-height: 100%;
  box-sizing: border-box;
  background-color: $bg-light;
}
#title-bar {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  -webkit-app-region: drag;
  background-color: $bg-light;
  height: 2.2em;
  text-align: center;
  border-bottom: 1px solid $light-grey;
  span {
    margin: auto;
    font-size: 10pt;
  }
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $el-dark;
  height: 41em;
  padding-top: 2em;
  h1 {
    font-size: 2em;
  }
  h1,
  h2 {
    margin: 0;
  }
  h6 {
    margin: 0.2em 0;
  }
  #links {
    text-align: center;
    a {
      color: $el-dark;
    }
    h6 {
      font-weight: 300;
    }
  }

  #events-container {
    // CSS for Clear-style list items
    // @for $i from 1 through 20 {
    //   &>div:nth-child(#{$i}) {
    //     background-color: rgba(#0000ff, 1 - ($i * 0.05));
    //   }
    // }
    & > #empty {
      margin: auto;
      padding: 1em;
      max-width: 25em;
      margin-top: 4em;
      h2 {
        font-weight: 400;
      }
      ol {
        text-align: left;
      }
      #icon {
        text-align: center;
      }
    }
  }
}
/*
    Below is custom CSS for vue-swipe-actions.
  */
.swipeout {
  border-bottom: 1px solid $light-grey;
  &:first-of-type {
    border-top: 1px solid $light-grey;
  }
  .swipeout-action {
    background-color: $light-grey;
    padding: 0 1em;
    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 2em;
    }
  }
}
</style>
