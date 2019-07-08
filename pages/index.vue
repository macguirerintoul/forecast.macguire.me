<template>
  <div>
    <h1>Forecast is simple.</h1>
    <p>It’s like a to-do list for procrastinators.</p>
    <Download />
    <h4>
      Created by
      <a target="_blank" href="https://mrintoul.com">Macguire Rintoul</a>
    </h4>
  </div>
</template>

<script>
import Download from '../components/Download.vue'

export default {
  components: { Download },
  layout: 'index',
}
</script>
