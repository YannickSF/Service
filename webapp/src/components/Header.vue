<template>
  <section id="header" class="hero is-dark is-fullheight-with-navbar has-background" >
    <img alt="Photo by Ian Schneider on Unsplash" src="@/assets/ian-schneider.jpg" class="hero-background"/>
    <div class="hero-body">
      <div class="container">
        <p class="title is-4 has-text-black">Yannick FELER</p>
        <p class="subtitle is-6 has-text-black">@Yannick_SF</p>
        <div class="content has-text-black">
          Concepteur développeur informatique à votre service. 
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.3;
}
</style>
