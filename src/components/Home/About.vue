<template>
  <div id="about">
    <div class="about-picture">
      <img src="@/assets/me.jpg" />
    </div>
    <div class="about-tldr">
      <h4>Who is Jiaping?</h4>
      <h5 class="subsection-title">TL;DR:</h5>
      <ul>
        <li>UCLA Class of 2021, B.S. Math of Computations</li>
        <li>Passionate about technology</li>
        <li>Skilled in JavaScript, Java, C/C++ and Python</li>
        <li>Always up for a challenge</li>
        <li>
          <a :href="resumeLink" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
    <div class="about-text">
      <div>
        <h5 class="subsection-title">Student</h5>
        <p>I am currently a senior at University of California, Los Angeles. I am pursuing a bachelor's degree in Mathematics of Computations (a combination of applied math and computer science).</p>
      </div>
      <div>
        <h5 class="subsection-title">Programmer</h5>
        <p>
          I am fluent in many programming languages, most notably Javascript, Java and C/C++. I have a good amount of projects both from classes and outside of classes.
          <a
            href="#projects"
          >Check them out!</a>
        </p>
      </div>
      <div>
        <h5 class="subsection-title">Tinkerer</h5>
        <p>
          I am a hands-on learner and love finding personal projects in my spare time. My most recent ones include a DIY electric skateboard.
          <a
            href="#hobbies"
          >Read more about my hobbies!</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;

  .about-picture {
    grid-column: span 1;
    display: grid;
    place-items: center;

    img {
      width: 70%;
      max-width: 280px;
      border: 3px $text-primary solid;
      border-radius: 50%;
    }
  }

  .about-tldr {
    grid-column: span 2;
    margin: 0 10px;

    h4 {
      text-transform: uppercase;
      font-size: 1.5rem;
      margin: 1em 0;
      font-weight: normal;
    }

    ul {
      list-style: disc;
      font-size: 1.1rem;
      line-height: 1.5em;
    }
  }

  .about-text {
    grid-column: span 3;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;

    div {
      margin: 0 10px;
    }
  }

  @media screen and (max-width: $media-break) {
    .about-picture {
      grid-column: span 3;
    }

    .about-tldr {
      grid-column: span 3;
    }

    .about-text {
      grid-column: span 3;
      grid-template-columns: 1fr;
    }
  }
}
</style>

<script>
export default {
  name: "About",
  data() {
    return {
      resumeLink: require("@/assets/resume.pdf").default,
    };
  },
};
</script>