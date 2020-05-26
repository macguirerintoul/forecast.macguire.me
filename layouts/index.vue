<template>
	<div id="container">
		<Header />
		<div id="index-showcase">
			<div>
				<nuxt />
			</div>
			<div id="demo">
				<cld-video autoplay loop muted cloud-name="macguire" publicId="Forecast/videos/demo2">
  				<cld-transformation quality="auto" fetch-format="auto" lazy/>
				</cld-video>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import {CldVideo, CldTransformation} from "cloudinary-vue"
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";

// import the app components
import DemoApp from "../components/DemoApp.vue";

export default {
	components: {
		Header,
		Footer,
		CldTransformation, CldVideo
	}
};
</script>
