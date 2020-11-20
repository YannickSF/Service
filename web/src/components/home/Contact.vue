<template>
  <section>
    <div class="tile is-ancestor" style="color: #000000;">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-3">Carte de Visite</p>
          <p class="subtitle is-4"><strong>Yannick S. FELER</strong> <br/> <sub class="is-6">Consulant en Conception & Developpement Informatique</sub></p>
          <p>
            <a title="0760 41 54 95"><font-awesome-icon class="icon " :icon="['fa', 'mobile']" /></a> • 
            <a href="mailto:yannick.feler@gmail.com"><font-awesome-icon class="icon " :icon="['fa', 'envelope-open']" /></a> • 
            <a href="https://github.com/YannickSF" target="about_blank"><font-awesome-icon class="icon " :icon="['fab', 'github']" /></a> • 
            <a href="https://twitter.com/_yannicksf" target="about_blank"><font-awesome-icon class="icon " :icon="['fab', 'twitter']" /></a> • 
            <a href="https://yannicksf.com"><font-awesome-icon class="icon " :icon="['fa', 'link']" /></a>
            <br/>
            <br/>
            <button id="visit" alt="Copy to clipboard" v-clipboard:copy="share" v-on:click="copied()" class="button is-small is-info is-light">Copier</button> <!-- <a href="#">#Innovation</a>-->
          </p>
        
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  data: function() {
    return {
      share: "Yannick S. FELER\n0760415495\nyannick.feler@gmail.com\nhttps://yannicksf.com"
    };
  },
  methods: {
    copied: function(){
      alert('copié !')
    }
  }
};
</script>
