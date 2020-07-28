<template>
  <div class="home" v-scroll-spy>
    <Intro class="hidden" />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <p>
      This website is designed and coded from scratch by me. If you like the style,
      <a href="https://github.com/jiapingzeng/jz3ng">check out my source code</a> and feel free to use any part of it!
    </p>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  place-items: center;
  max-width: 1600px;
  margin: auto;

  > p {
    margin: 1em 2em;
    text-align: center;
  }
}

.home > div:not(:first-child) {
  width: 100%;
  padding: 40px 0;

  > * {
    margin: 0 25px;
  }
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
  background-color: $text-theme;
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
import Contact from "@/components/Home/Contact.vue";

import "vue2-animate/dist/vue2-animate.min.css";

export default {
  name: "Home",
  components: {
    Intro,
    About,
    Skills,
    Projects,
    Contact,
  },
};
</script>
