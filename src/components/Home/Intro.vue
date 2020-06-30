<template>
  <div id="intro">
    <h1>Hello there</h1>
    <p>Welcome</p>
    <div class="intro-bottom">
      <transition name="bounce">
        <i>
          <fa-icon :icon="['fas','chevron-down']" />
        </i>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#intro {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(#686868, #363636);
  color: #d8d8d8;

  h1 {
    font-size: 4rem;
  }

  .intro-bottom {
    position: absolute;
    bottom: 5vh;

    i {
      font-size: 40px;
    }
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown);

export default {
  name: "Intro"
};
</script>