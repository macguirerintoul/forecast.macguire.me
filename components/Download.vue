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
		return {
			os: this.getOS(),
			exeUrl: "",
			dmgUrl: ""
		};
	},
	computed: {
		downloadString() {
			return this.os !== "" ? ` for ${this.os}` : "";
		},
		icon() {
			if (this.os === "Windows")
				return '<img src="windows.svg" alt="Windows icon"/>';
			if (this.os === "macOS") return '<img src="macos.svg" alt="macOS icon"/>';
			return "";
		}
	},
	mounted() {
		this.getAssets();
	},
	methods: {
		getOS() {
			if (navigator.platform.indexOf("Win") > -1) return "Windows";
			if (navigator.platform.indexOf("Mac") > -1) return "macOS";
			return "";
		},
		getAssets() {
			fetch("https://api.github.com/repos/mrintoul/forecast/releases/latest")
				.then(response => response.json())
				.then(data => {
					this.exeUrl = data.assets.find(element => {
						return element.name.indexOf("exe") > -1;
					}).browser_download_url;

					this.dmgUrl = data.assets.find(element => {
						return element.name.indexOf("dmg") > -1;
					}).browser_download_url;
				});
		},
		download() {
			if (this.os === "Windows") {
				window.open(this.exeUrl);
			} else if (this.os === "macOS") {
				window.open(this.dmgUrl);
			}
			window.open("/download", "_self");
		}
	}
};
</script>
