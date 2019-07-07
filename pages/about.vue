<template>
  <section>
    <h1>About</h1>
    <p>
      Forecast was created for a few reasons.
    </p>
    <p>
      One, I had plenty of assignments at school and wanted to keep track of how
      much time I had left to complete them.
    </p>
    <p>
      Two, my friend <a href="https://stuible.com/" target="_blank">Josh</a> was
      making an
      <a href="https://electronjs.org/" target="_blank">Electron</a> app called
      <a href="https://snafu.fun/" target="blank">Snafu</a>
      and I had FOMO.
    </p>
    <p>Three, I wanted to practice my design and development skills.</p>
    <p>
      Now, here we are. If you have any issues or suggestions (or you want to
      hire me), send me an email at <span>macguire</span><span>.rintoul</span
      ><span>@gmai</span>l.com.
    </p>
    <Download />
  </section>
</template>

<script>
import Download from '../components/Download.vue'

export default { components: { Download } }
</script>
