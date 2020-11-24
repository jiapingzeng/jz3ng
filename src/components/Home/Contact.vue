<template>
  <div id="contact">
    <div class="contact-card">
      <div class="card-name-container">
        <h3>Jiaping Zeng</h3>
      </div>
      <div class="card-info-container">
        <div>
          <p>Palo Alto, California</p>
          <p>(650) 665-0255</p>
          <p>
            <a href="mailto://jzeng@outlook.com">jzeng@outlook.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Arvo");

#contact {
  display: grid;
  place-items: center;
  background-color: #dedede;
  box-shadow: inset 0px 11px 8px -10px grey, inset 0px -11px 8px -10px grey;

  .contact-card {
    width: 500px;
    height: 275px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    box-shadow: 0px 2px 4px #00000030;
    transition: all 200ms ease-in-out;

    .card-name-container {
      grid-column: span 3;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      h3 {
        font-family: Arvo;
        text-transform: uppercase;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 2em 1em 2em 0;
        position: relative;
      }

      h3::after {
        content: "";
        position: absolute;
        right: -18px;
        top: 50%;
        margin-top: -35px;
        width: 3px;
        height: 70px;
        position: absolute;
        background-color: $text-theme;
      }
    }

    .card-info-container {
      grid-column: span 2;
      display: flex;
      align-items: center;

      p {
        font-family: Arvo;
        grid-column: span 4;
        margin: 0.2em;
      }
    }
  }

  .contact-card:hover {
    box-shadow: 0px 10px 25px #00000050;
    transform: translate3d(0px, -1px, 0px);
  }

  @media screen and (max-width: $media-break-small) {
    .contact-card {
      width: 325px;
      height: 165px;
    }

    .card-name-container {
      h3 {
        font-size: 1.2rem !important;
      }
      h3::after {
        width: 2px !important;
        height: 50px !important;
        margin-top: -25px !important;
        right: -11px !important;
      }
    }

    .card-info-container p {
      font-size: 0.7rem !important;
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