<template>
  <div>
    <h1>Forecast is simple.</h1>
    <p>It’s like a to do list for procrastinators.</p>
    <button @click="download()">Download {{ downloadString }}</button>
    <nuxt-link to="releases">other platforms</nuxt-link>
    <h3>Created by Macguire Rintoul</h3>
  </div>
</template>

<script>
export default {
  layout: 'index',
  data() {
    return { os: this.getOS() }
  },
  computed: {
    downloadString() {
      return this.os !== '' ? ` for ${this.os}` : ''
    },
  },
  methods: {
    getOS() {
      if (navigator.platform.indexOf('Win') > -1) return 'Windows'
      if (navigator.platform.indexOf('Mac') > -1) return 'macOS'
      return ''
    },
    download() {
      if (this.os === 'Windows') {
        window.open('https://www.w3schools.com')
      } else if (this.os === 'macOS') {
        window.open('https://www.w3schools.com')
      } else {
        window.open('/releases', '_self')
      }
    },
  },
}
</script>
