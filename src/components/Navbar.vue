<template>
  <nav id="main-navbar" class="navbar">
    <ul class="navbar-nav" v-scroll-spy-active v-scroll-spy-link>
      <li class="nav-item">
        <a href="#intro" class="nav-link">
          <span class="link-text">Jiaping Zeng</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#about" class="nav-link">
          <span class="link-text">About</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#skills" class="nav-link">
          <span class="link-text">Skills</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#projects" class="nav-link">
          <span class="link-text">Projects</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#contact" class="nav-link">
          <span class="link-text">Contact</span>
        </a>
      </li>
      <div class="nav-socials">
        <span>
          <a href="https://www.linkedin.com/in/jiapingzeng" class="social-icon si-linkedin">
            <i>
              <fa-icon :icon="['fab', 'linkedin-in']" />
            </i>
            <i>
              <fa-icon :icon="['fab', 'linkedin-in']" />
            </i>
          </a>
          <a href="https://github.com/jiapingzeng" class="social-icon si-github">
            <i>
              <fa-icon :icon="['fab', 'github']" />
            </i>
            <i>
              <fa-icon :icon="['fab', 'github']" />
            </i>
          </a>
        </span>
      </div>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  background-color: $nav-bg-primary;

  .navbar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-right: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .nav-item {
      width: 100%;
      color: $nav-text-secondary;
      transition: color 300ms ease-in, background-color 300ms ease-in;

      .nav-link {
        display: flex;
        align-items: center;
        height: 3rem;
        color: inherit;
        text-decoration: none;

        .link-text {
          width: 100%;
          text-align: center;
        }
      }
    }

    .nav-item:first-child .nav-link {
      height: 5rem;
      font-size: 1.3rem;
      color: $nav-text-primary;
    }

    .nav-item:not(:first-child):hover,
    .nav-item:not(:first-child).active {
      border-right: 3px $nav-text-theme solid;
      background-color: $nav-bg-secondary;
      color: $nav-text-primary;
    }
  }

  .nav-socials {
    padding: 1rem;

    span {
      display: inline-block;
    }

    .social-icon {
      padding: 0.2rem;
      margin: 0.3rem;
      width: 40px;
      height: 40px;
      font-size: 24px;
      line-height: 40px !important;
      color: $nav-text-secondary;
      display: block;
      float: left;
      text-align: center;
      overflow: hidden;
      border-radius: 50%;

      i {
        display: block;
        line-height: 40px;
        position: relative;
        transition: all 300ms ease;
      }
    }

    .social-icon:hover i:first-child {
      margin-top: -40px;
    }

    .si-linkedin:hover {
      color: $nav-text-primary;
      background-color: #0e76a8;
    }

    .si-github:hover {
      color: $nav-text-primary;
      background-color: #171515;
    }
  }
}

@media only screen and (max-width: $media-break) {
  .navbar {
    display: none;
  }
}

@media only screen and (min-width: $media-break) {
  .navbar {
    top: 0;
    width: 16rem;
    height: 100vh;
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub);

export default {
  name: "Navbar",
};
</script>