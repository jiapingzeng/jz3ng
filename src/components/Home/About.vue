<template>
  <div id="about">
    <div class="about-tldr">
      <img src="@/assets/me.jpg" />
      <div>
        <h5 class="section-subtitle">Who is Jiaping?</h5>
        <h4>TL;DR:</h4>
        <ul>
          <li>UCLA Class of 2021</li>
          <li>Math of Computations major</li>
          <li>Passionate about technology</li>
          <li>Skilled in JavaScript, Java, C/C++ and Python</li>
          <li>Always up for a challenge</li>
        </ul>
      </div>
    </div>
    <div class="about-text">
      <div>
        <h5>Student</h5>
        <p>I am currently a senior at University of California, Los Angeles. I am pursuing a bachlor's degree in Mathematics of Computations (a combination of applied math and computer science).</p>
      </div>
      <div>
        <h5>Programmer</h5>
        <p>
          I am fluent in many programming languages, most notably Javascript, Java and C/C++. I have a good amount of projects both from classes and outside of classes.
          <a href="#projects">Check them out!</a>
        </p>
      </div>
      <div>
        <h5>Tinkerer</h5>
        <p>
          I am a hands-on learner and love finding personal projects in my spare time. My most recent ones include a DIY electric skateboard.
          <a href="#hobbies">Read more about my hobbies!</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  .about-tldr {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(300px, 20%) auto;

    img {
      border-radius: 50%;
    }
  }

  .about-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
      flex: 1 1 200px;
      margin: 10px;
    }
  }
}
</style>

<script>
export default {
  name: "About",
};
</script>