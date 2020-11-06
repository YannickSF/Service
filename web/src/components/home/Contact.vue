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
            <button id="visit" alt="Copy to clipboard" v-clipboard:copy="share" v-on:click="copied()" class="button is-small is-info is-light">Copier</button> <!-- <a href="#">#Innovation</a>-->
          </p>
        
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Newsletters</p>
            <p class="subtitle">
              Entreprises, Technologies, Marketing, Innovations, Growth recevez régulièrement des conseils et analyses dans le domaine.<br/>
              Inscrivez vous dès maintenant !
            </p>

            <div class="field has-addons">
              <div class="control is-expanded">
                <input id="sub_mail" class="input is-rounded"  type="text" placeholder="Email" />
              </div>
              <div class="control">
                <button v-on:click="sub()" class="button is-info is-rounded"> S'inscrire </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
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
    },
    sub: function(){
      axios.post('https://shareit-e2d7.restdb.io/rest/yannicksf', 
      {'email': document.getElementById('sub_mail').value}, 
      {headers: { 'cache-control': 'no-cache',
      'x-apikey': '7d1510debd203c8a439dc2d1cc0f31d86032e',
      'content-type': 'application/json' }}
     )
    }
  }
};
</script>
