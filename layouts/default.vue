<template>
	<div id="container">
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>
<script>
// eslint-disable-next-line
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	}
};
</script>
