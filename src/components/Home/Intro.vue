<template>
  <div id="intro">
    <h1>Hello there</h1>
  </div>
</template>

<style lang="scss" scoped>
#intro {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(#686868, #363636);

  h1 {
    font-size: 4rem;
    color: #d8d8d8;
  }
}
</style>

<script>
export default {
  name: "Intro"
};
</script>