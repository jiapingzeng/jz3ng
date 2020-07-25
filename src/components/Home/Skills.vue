<template>
  <div id="skills">
    <div class="section-title">
      <h3>My Skills</h3>
    </div>
    <div class="skills-list">
      <div>
        <h3>Software Engineering</h3>
        <p></p>
      </div>
      <div>
        <h3>Full-stack Web Development</h3>
        <p></p>
      </div>
      <div>
        <h3>Full-stack Web Development</h3>
        <p></p>
      </div>
      <div>
        <h3>Teamwork</h3>
        <p>I work well both alone and in collaboration. In addition to working with a team at ServiceNow, I have received awards at multiple team hacakathons.</p>
      </div>
      <div>
        <h3>Fast Learner</h3>
        <p></p>
      </div>
      <div>
        <h3>Bilingual</h3>
        <p>I speak fluent English and Mandarin Chinese (and a little bit of French!).</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#skills {
  display: flex;
  flex-wrap: wrap;

  .section-title {
flex: 0 0 33%;
max-width: 33%;
  }

  .skills-list {

  }
}
</style>

<script>
export default {
  name: "Skills",
};
</script>