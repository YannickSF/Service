<template>
  <section class="hero is-fullheight-with-navbar" style="background-color: #d91e36;">
    <div>
      <p class="title is-1" style="padding-top: 2%; color: #000000;">Mes Services</p>

      <div class="container" style="padding-top: 2%; padding-bottom: 2%">
        <div class="columns">

          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov I</p>
                <hr />
                <p class="subtitle">
                    <ul>
                        <li>Développement de <strong>Site internet</strong> : Vitrine, Blog, Boutique, Catalogue, ..</li>
                        <br/>
                        <li><strong>Responsive design</strong> adapté pour mobiles et tablettes</li>
                        <br/>
                        <li>Référencement Naturel</li>
                        <br/>
                        <li>Hébergement inclus</li>
                        <br/>
                        <li><span class="tag is-success is-large is-rounded">A Partir de 1250€</span></li>
                    </ul>
                </p>
              </div>
              <footer class="card-footer">
                  <p class="card-footer-item">
                      <a href="https://ynov1.yannicksf.com" target="_about_blank"><button class="button is-success is-light is-large">Commander</button></a>
                  </p>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovI" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov II</p>
                <hr />
                <p class="subtitle">
                    <ul>
                        <li>Développement d'<strong>Application Desktop</strong>, d'<strong>Application Web</strong> ou d'<strong>API</strong></li>
                        <br/>
                        <li>Assistance à la <strong>conception</strong> de l'application</li>
                        <br/>
                        <li>Développement en méthode <strong>agile</strong>. </li>
                        <br/>
                        <li>Hébergement inclus</li>
                        <br/>
                        <li><span class="tag is-success is-large is-rounded">A Partir de 3000€</span></li>
                    </ul>
                </p>
              </div>
              <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href="https://ynov2.yannicksf.com" target="_about_blank"><button class="button is-success is-light is-large">Commander</button></a>
                  </p>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovII" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov F</p>
                <hr />
                <p class="subtitle">
                    <ul>
                        <li>Vous avez <strong>une idée</strong> qui veut voir le jour ? </li>
                        <br/>
                        <li>Un <strong>besoin</strong> en développement ? </li>
                        <br/>
                        <li>De <strong>conseils</strong> ou de <strong>formations</strong> ? </li>
                        <br/>
                        <li>D'<strong>Automatiser</strong> des tâches ? </li>
                        <br/>
                        <li><span class="tag is-success is-large is-rounded">DEVIS GRATUIT sur Mesure</span></li>
                    </ul>
                </p>
              </div>
              <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href="https://ynovf.yannicksf.com" target="_about_blank"><button class="button is-success is-light is-large">Commander</button></a>
                  </p>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovF" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "offers",
  data: function (){
    return {
      ynovI: "Ynov I|https://ynov1.yannicksf.com",
      ynovII: "Ynov II|https://ynov2.yannicksf.com",
      ynovF: "Ynov F|https://ynovf.yannicksf.com"
    }
  },
  methods: {
    copied: function(){
      alert('copié !')
    }
  }
};
</script>
