<template>
  <div class="home" v-scroll-spy>
    <Intro class="section" />
    <About/>
    <Skills/>
    <Projects/>
    <Hobbies/>
    <Contact/>
  </div>
</template>

<script>
import Intro from "@/components/Home/Intro.vue"
import About from "@/components/Home/About.vue"
import Skills from "@/components/Home/Skills.vue"
import Projects from "@/components/Home/Projects.vue"
import Hobbies from "@/components/Home/Hobbies.vue"
import Contact from "@/components/Home/Contact.vue"

import "vue2-animate/dist/vue2-animate.min.css"

export default {
  name: 'Home',
  components: {
    Intro, About, Skills, Projects, Hobbies, Contact
  }
}
</script>
