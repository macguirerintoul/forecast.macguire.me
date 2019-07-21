<template>
  <section>
    <h1>Download</h1>
    <a target="_blank" :href="dmgUrl">
      <button>
        <span><img src="macos.svg" alt="macOS icon"/></span>Download for macOS
      </button>
    </a>
    <a target="_blank" :href="exeUrl">
      <button>
        <span><img src="windows.svg" alt="Windows icon"/></span>Download for
        Windows
      </button>
    </a>

    <h2>Installation notes</h2>
    <p>
      Because this is an unsigned app, your operating system might present you
      with warnings. If you see something like 'more info', click that and it
      should let you proceed.
    </p>
    <p>
      On Windows, right-clicking and selecting 'Run as Administrator' on the
      .exe should work.
    </p>
    <p>
      On macOS, you may need to right-click and select 'Open' instead of just
      double-clicking the app.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      exeUrl: '',
      dmgUrl: '',
    }
  },
  mounted() {
    fetch('https://api.github.com/repos/mrintoul/forecast/releases/latest')
      .then(response => response.json())
      .then(data => {
        this.exeUrl = data.assets.find(element => {
          return element.name.indexOf('exe') > -1
        }).browser_download_url

        this.dmgUrl = data.assets.find(element => {
          return element.name.indexOf('dmg') > -1
        }).browser_download_url
      })
  },
}
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 1em;
}
a {
  text-decoration: none;
}
</style>
