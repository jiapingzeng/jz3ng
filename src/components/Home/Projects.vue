<template>
  <div id="projects">
    <div class="section-title-container">
      <h2 class="section-title">Projects &amp; Hobbies</h2>
    </div>
    <div class="section-description">
      <h5 class="subsection-title">3D design</h5>
      <p>
        I enjoy designing and printing useful 3D models (though I am fairly new to it). Follow me on Thingiverse
        <a
          href="https://www.thingiverse.com/jiapingzeng"
        >here</a>!
      </p>
    </div>
    <div class="section-list">
      <div class="project-card">
        <img src="@/assets/projects/lamp.jpg" />
        <div class="card-description">
          <h5>Smart printed lamp</h5>
          <p>
            This is a simple lamp that I designed and printed.
            <a
              href="https://www.thingiverse.com/thing:4376484"
            >Download it here!</a>
          </p>
        </div>
      </div>
    </div>
    <div class="section-description">
      <h5 class="subsection-title">Electronics</h5>
      <p>I like collecting new/scrap electronic parts and building something cool out of them.</p>
    </div>
    <div class="section-list">
      <div class="project-card">
        <img src="@/assets/projects/eskate.jpg" />
        <div class="card-description">
          <h5>DIY electric skateboard</h5>
          <p>
            I built a custom electric skateboard during the summer of 2019 that goes up to 35 miles per hour with about 20 miles of range. Read my
            <a
              class="disabled"
              href="#"
            >build log (coming soon)</a> to learn more!
          </p>
        </div>
      </div>
      <div class="project-card">
        <img src="@/assets/projects/pc.jpg" />
        <div class="card-description">
          <h5>Custom watercooled PC</h5>
          <p>
            <a href="https://pcpartpicker.com/b/rXzMnQ">This PC build</a> from almost 6 years ago is still one of my favorite projects mostly because of how unnecessary and overkill the custom watercooling loop is (on used hardware that someone threw away). It still works well as my main computer at home.
          </p>
        </div>
      </div>
    </div>
    <div class="section-description">
      <h5 class="subsection-title">Software</h5>
      <p>I also love building software projects spontaneously in my free time (especially web-related). Check out my <a href="https://github.com/jiapingzeng">GitHub</a> for more of these!</p>
    </div>
    <div class="section-list">
      <div class="project-card">
        <img src="@/assets/projects/pvz.jpg" />
        <div class="card-description">
          <h5>PvZ autoclicker</h5>
          <p>
            Plants vs. Zombies is one of my favorite strategy games.
            <a
              href="https://github.com/jiapingzeng/pvzclicker"
            >This autoclicker</a> (written in C) automates my strategy in the Survival Endless mode.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 25px;

  .section-title-container {
    grid-column: span 4;
    display: flex;
    justify-content: center;
  }

  .section-description {
    grid-column: span 1;
    margin-left: 40px;
  }

  .section-list {
    grid-column: span 3;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    .project-card {
      flex: 0 0 auto;
      margin: 10px;
      width: 300px;
      height: 350px;
      box-shadow: 0px 2px 4px #00000030;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        margin: 0;
        object-fit: cover;
        object-position: 50% 100%;

        @media screen and (min-width: $media-break) {
          transition: transform 200ms, filter 200ms;
        }
      }

      .card-description {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 250px;
        margin: 0;
        padding: 5px 25px;
        background-color: #fffffff4;
        height: 60px;
        transition: height 300ms;

        h5 {
          font-weight: normal;
          margin: 1em 0;
          font-size: 1.1rem;
          text-transform: capitalize;
        }

        p {
          display: none;
        }
      }
    }

    .project-card:hover {
      box-shadow: 0px 4px 7px #00000030;

      img {
        transform: scale(1.05);
        filter: blur(5px);
      }

      .card-description {
        height: 250px;
      }

      h5 {
        display: none;
      }

      p {
        display: block;
      }
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .section-list::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: $media-break) {
    .section-description {
      grid-column: span 4;
    }

    .section-list {
      grid-column: span 4;
    }
  }
}
</style>

<script>
export default {
  name: "Projects",
};
</script>