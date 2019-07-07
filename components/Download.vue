<template>
  <div class="download">
    <button @click="download()">
      <!-- eslint-disable-next-line -->
      <span v-html="icon"></span> Download {{ downloadString }}
    </button>
    <nuxt-link class="tiny" to="download">other platforms</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return { os: this.getOS() }
  },
  computed: {
    downloadString() {
      return this.os !== '' ? ` for ${this.os}` : ''
    },
    icon() {
      if (this.os === 'Windows')
        return '<img src="windows.svg" alt="Windows icon"/>'
      if (this.os === 'macOS') return '<img src="macos.svg" alt="macOS icon"/>'
      return ''
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
        window.open(
          'https://github.com/mrintoul/Forecast/releases/download/v1.0.0/Forecast.Setup.1.0.0.exe'
        )
      } else if (this.os === 'macOS') {
        window.open(
          'https://github.com/mrintoul/Forecast/releases/download/v1.0.0/Forecast.1.0.0.dmg'
        )
      }
      window.open('/download', '_self')
    },
  },
}
</script>
