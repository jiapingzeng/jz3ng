<template>
  <div class="home" v-scroll-spy>
    <Intro class="hidden" />
    <About />
    <Skills />
    <Projects class="hidden" />
    <Hobbies class="hidden" />
    <Contact />
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  place-items: center;
}

.home > div:not(:first-child) {
  width: 90%;
  max-width: 1200px;
  margin: 20px 0 40px 0;
  padding: 0 5%;
}

.hidden {
  display: none !important;
}

.section-title {
  display: inline-block;
  position: relative;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  letter-spacing: -2px;
  font-weight: 800;
}

.section-title::after {
  content: "";
  width: 50px;
  height: 5px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  margin-left: -25px;
  background-color: $text-theme-secondary;
  z-index: -1;
}

.subsection-title {
  font-size: 1rem;
  margin: 1.2em 0;
  text-transform: uppercase;
  font-weight: normal;
}
</style>

<script>
import Intro from "@/components/Home/Intro.vue";
import About from "@/components/Home/About.vue";
import Skills from "@/components/Home/Skills.vue";
import Projects from "@/components/Home/Projects.vue";
import Hobbies from "@/components/Home/Hobbies.vue";
import Contact from "@/components/Home/Contact.vue";

import "vue2-animate/dist/vue2-animate.min.css";

export default {
  name: "Home",
  components: {
    Intro,
    About,
    Skills,
    Projects,
    Hobbies,
    Contact,
  },
};
</script>
