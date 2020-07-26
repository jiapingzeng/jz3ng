<template>
  <div id="skills">
    <div class="section-title-container">
      <h3 class="section-title">My Skills</h3>
    </div>
    <div class="skills-list">
      <div>
        <i>
          <fa-icon :icon="['fas', 'code']" />
        </i>
        <h5 class="subsection-title">Software Engineering</h5>
        <p>
          I like building different software projects for fun using different languages and frameworks. Check out my favorites:
          <a
            href="https://github.com/jiapingzeng/pvzclicker"
          >PvZ Autoclicker (C)</a> and
          <a
            href="https://github.com/jiapingzeng/cs1c/tree/master/jiapingzeng-cs1c-project02"
          >Optimized Subset Sum (Java)</a>
        </p>
      </div>
      <div>
        <i>
          <fa-icon :icon="['fas', 'desktop']" />
        </i>
        <h5 class="subsection-title">Full-stack Web Development</h5>
        <p>
          I can also build modern websites from scratch, both frontend and backend. Here are some examples:
          <a
            href="https://github.com/jiapingzeng/jz3ng"
          >This site</a> and
          <a href="https://www.gracepointonline.org/gpla-welcome-draft">Gracepoint Los Angeles</a>
        </p>
      </div>
      <div>
        <i>
          <fa-icon :icon="['fas', 'users']" />
        </i>
        <h5 class="subsection-title">Teamwork</h5>
        <p>I work well both alone and in collaboration. In addition to working with a team at ServiceNow, I have received awards at multiple team hacakathons.</p>
      </div>
      <div>
        <i>
          <fa-icon :icon="['fas', 'language']" />
        </i>
        <h5 class="subsection-title">Bilingual</h5>
        <p>I speak fluent English and Mandarin Chinese, plus a little bit of French!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  width: 90%;

  .section-title-container {
    grid-column: span 3;
    display: grid;
    place-items: center;
  }

  .skills-list {
    grid-column: span 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 50px;

    i {
      svg {
        background-color: $text-theme;
        border-radius: 50%;
        padding: 0.8rem;
        color: white;
      }
    }
  }

  @media screen and (max-width: $media-break) {
    .skills-list {
      grid-gap: 0;

      div {
        grid-column: span 2;
        margin: 10px;
      }
    }
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faDesktop,
  faUsers,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faDesktop, faUsers, faLanguage);

export default {
  name: "Skills",
};
</script>