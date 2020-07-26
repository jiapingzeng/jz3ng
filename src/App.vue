<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,800");

:root {
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
}

body {
  color: $text-primary;
  background-color: $bg-primary;
  margin: 0;
  padding: 0;
}

#app {
  main {
    margin-left: 16rem;
    a {
      text-decoration: none;
      color: $text-theme;
    }
    a:hover {
      color: $text-theme-secondary;
    }
  }
}

@media screen and (max-width: $media-break) {
  #main-navbar {
    display: none;
  }

  #app {
    main {
      margin: 0;
    }
  }
}

/* utility classes */

.hidden {
  display: none !important;
}

.disabled {
  pointer-events: none !important;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
