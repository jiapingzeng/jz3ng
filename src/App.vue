<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
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
  }
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>
