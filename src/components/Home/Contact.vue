<template>
  <div id="contact">
    <div class="section-title-container">
      <h3 class="section-title">Contact Me</h3>
    </div>
    <ul>
      <li>
        <i>
          <fa-icon :icon="['fas', 'envelope']" />
        </i>
        <a href="mailto://me@jz3ng.com">me@jz3ng.com</a>
      </li>
      <li>
        <i>
          <fa-icon :icon="['fab', 'linkedin']" />
        </i>
        <a href="linkedin.com/in/jiapingzeng">jiapingzeng</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  display: grid;
  place-items: center;

  ul {
    padding: 0;
    list-style: none;

    i {
      color: $text-secondary;
      margin: 0 0.5rem;
    }
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faLinkedin, faGithub);

export default {
  name: "Contact",
};
</script>