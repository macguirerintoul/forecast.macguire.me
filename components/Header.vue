<template>
	<header>
		<nav
			:class="{ 'is-active': showMobileMenu }"
			class="navbar"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="navbar-brand">
				<nuxt-link class="navbar-item" to="/">
					<img id="logo-icon" src="/icon.png" width="38" />
					<span id="logo-text">Forecast</span>
				</nuxt-link>

				<a
					role="button"
					class="mobile-menu"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					@click="toggleMobileMenu"
				>
					<span>Menu</span>
				</a>
			</div>

			<div class="navbar-menu" @click="closeMobileMenu">
				<div class="navbar-end">
					<nuxt-link to="/" class="navbar-item hvr-underline-reveal">
						Home
					</nuxt-link>

					<nuxt-link to="/about" class="navbar-item hvr-underline-reveal">
						About
					</nuxt-link>

					<a
						href="https://github.com/mrintoul/forecast"
						target="_blank"
						class="navbar-item hvr-underline-reveal"
					>
						GitHub
					</a>

					<nuxt-link to="/download" class="navbar-item">
						<button>Download</button>
					</nuxt-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return { showMobileMenu: false };
	},
	methods: {
		toggleMobileMenu() {
			this.showMobileMenu = !this.showMobileMenu;
		},
		closeMobileMenu() {
			this.showMobileMenu = false;
		}
	}
};
</script>
