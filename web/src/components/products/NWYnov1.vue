<template>
  <div class="container">
    <div class="card box">
      <div class="card-image">
        <figure class="image is-square">
          <img src="@/assets/abs.png" alt="Améliorer son activité grâce à son site internet" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Améliorer son activité grâce à son site internet.</p>
            <p class="subtitle is-6">by @_yannicksf</p>
          </div>
        </div>

        <div class="content">
          Augmenter votre Chiffre d'affaire, La visibilitée de votre marque ou
          encore automatiser vos commandes, Apprennez à faire de votre site
          internet une place forte de votre business.
        </div>
      </div>
      <footer class="card-footer">
        <div class="field has-addons" style="margin-top: 3%;">
          <div class="control is-expanded">
            <input id="sub_mail" class="input is-rounded" type="text" placeholder="Email" />
          </div>
          <div class="control">
            <button v-on:click="sub()" class="button is-warning is-rounded">
              S'inscrire
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "NWYnov1",
  methods: {
    sub: function(){
      axios.post('https://shareit-e2d7.restdb.io/rest/yannicksf', 
      {'email': document.getElementById('sub_mail').value, 'box': 'abs'}, 
      {headers: { 'cache-control': 'no-cache',
      'x-apikey': '7d1510debd203c8a439dc2d1cc0f31d86032e',
      'content-type': 'application/json' }}
     )
    }
  }
};
</script>
