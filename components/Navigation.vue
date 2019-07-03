<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img id="logo-icon" src="/icon.png" width="48" />
        <span id="logo-text">Forecast</span>
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>

        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="/cli" class="navbar-item">
          CLI
        </nuxt-link>

        <a
          href="https://github.com/mrintoul/forecast"
          target="_blank"
          class="navbar-item"
        >
          GitHub
        </a>
      </div>
    </div>
    <!-- link to bulma cdn for debugging -->
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    /> -->
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 3.25rem;
  z-index: 30;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  // same width as container
  max-width: 50em;
  margin: auto;
}

.navbar,
.navbar-end,
.navbar-menu,
.navbar-start {
  align-items: stretch;
  display: flex;
}

.navbar-brand {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
  a {
    text-decoration: none;
  }
  #logo-icon {
    margin-right: 0.5em;
  }
  #logo-text {
    color: #000;

    font-size: 2em;
    font-weight: 700;
  }
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}

.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
  .navbar-item {
    padding-left: 1em;
  }
}

.navbar-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  position: relative;
  color: #000;
  text-decoration: none;
}
</style>
