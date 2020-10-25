<template>
  <section>
    <div class="tile is-ancestor" style="color: #000000;">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-3">Carte de Visite</p>
          <p class="subtitle is-4"><strong>Yannick S. FELER</strong> <br/> <sub class="is-6">Concepteur Développeur Informatique</sub></p>
          <p>
            <a title="0760 41 54 95"><font-awesome-icon class="icon " :icon="['fa', 'mobile']" /></a> • 
            <a href="mailto:yannick.feler@gmail.com"><font-awesome-icon class="icon " :icon="['fa', 'envelope-open']" /></a> • 
            <a href="https://github.com/YannickSF" target="about_blank"><font-awesome-icon class="icon " :icon="['fab', 'github']" /></a> • 
            <a href="https://twitter.com/_yannicksf" target="about_blank"><font-awesome-icon class="icon " :icon="['fab', 'twitter']" /></a> • 
            <a href="https://yannicksf.com"><font-awesome-icon class="icon " :icon="['fa', 'link']" /></a>
            <br/>
            <br/>
            <button id="visit" v-clipboard:copy="share" v-on:click="copied()" class="button is-small is-info is-light">Copier</button> <!-- <a href="#">#Innovation</a>-->
          </p>
        
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Newsletters</p>
            <p class="subtitle">
              Technologies, Business, Innovations, Marketing, Growth, recevez toutes les semaines un condensé des meilleurs news.<br/>
              Inscrivez vous dès maintenant !
            </p>

            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input is-rounded"  type="text" placeholder="Email" />
              </div>
              <div class="control">
                <a class="button is-info is-rounded"> S'inscrire </a>
              </div>
            </div>
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
