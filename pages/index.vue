<template>
	<div>
		<h1>Forecast is simple.</h1>
		<p>It shows you the time remaining until your tasks are due.</p>
		<Download />
		<h4>
			Created by
			<a target="_blank" href="https://macguire.me">Macguire Rintoul</a>
		</h4>
	</div>
</template>

<script>
import Download from "../components/Download.vue";

export default {
	components: { Download },
	layout: "index"
};
</script>
