<template>
  <div id="hobbies">
    <div class="section-title-container">
      <h2 class="section-title">My Hobbies</h2>
    </div>
    <div>
      <h5 class="subsection-title">3D design</h5>
      <p>
        I am still fairly new to this but I enjoy designing and printing useful 3D models. Follow me on Thingiverse
        <a href="https://www.thingiverse.com/jiapingzeng">here</a>!
      </p>
    </div>
    <div>
      <h5 class="subsection-title">Electronics</h5>
      <p>I built a custom electric skateboard during the summer of 2019 that goes up to 35 miles per hour with about 20 miles of range. Read my <a class="disabled" href="#">build log (coming soon)</a> to learn more!</p>
      <p><a href="https://pcpartpicker.com/b/rXzMnQ">This PC build</a> from almost 6 years ago is still one of my favorite projects mostly because of how unnecessary and overkill the custom watercooling loop is (on used computer hardware that someone threw away). I had a lot of fun building it and it still works well even though the components are fairly aged.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hobbies {
  display: grid;
}
</style>

<script>
export default {
  name: "Hobbies",
};
</script>