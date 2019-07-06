<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img id="logo-icon" src="/icon.png" width="38" />
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

          <nuxt-link to="/download" class="navbar-item">
            <button>Download</button>
          </nuxt-link>
        </div>
      </div>
      <!-- link to bulma cdn for debugging -->
      <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    /> -->
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
