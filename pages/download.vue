<template>
  <section>
    <h1>Download</h1>
    <a
      target="_blank"
      href="https://github.com/mrintoul/Forecast/releases/download/v1.0.1/Forecast.1.0.1.dmg"
    >
      <button>
        <span><img src="/macos.svg" alt="macOS icon"/></span>Download for macOS
      </button>
    </a>
    <a
      target="_blank"
      href="https://github.com/mrintoul/Forecast/releases/download/v1.0.1/Forecast.Setup.1.0.1.exe"
    >
      <button>
        <span><img src="/windows.svg" alt="Windows icon"/></span>Download for
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

<style lang="scss" scoped>
button {
  margin-bottom: 1em;
}
a {
  text-decoration: none;
}
</style>
