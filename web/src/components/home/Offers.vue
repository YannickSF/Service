<template>
  <section class="hero is-fullheight-with-navbar" style="background-color: #d91e36;">
    <div>
      <p class="title is-1" style="padding-top: 2%; color: #000000;">Mes Services</p>

      <div class="container" style="padding-top: 2%; padding-bottom: 2%">
        <div class="columns">

          <div class="column is-one-third">
            <a href="https://ynov1.yannicksf.com" target="_about_blank">
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
                <form action="mailto:contact@yannicksf.com?subject=Offre Mark I" method="GET">
                  <p class="card-footer-item">
                      <button class="button is-success is-light is-large">Commander</button>
                  </p>
                </form>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovI" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
            </a>
          </div>

          <div class="column is-one-third">
            <a href="https://ynov2.yannicksf.com" target="_about_blank">
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
                <form action="mailto:contact@yannicksf.com?subject=Offre Mark II" method="GET">
                  <p class="card-footer-item">
                    <button class="button is-success is-light is-large">Commander</button>
                  </p>
                </form>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovII" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
            </a>
          </div>

          <div class="column is-one-third">
            <a href="https://ynovf.yannicksf.com" target="_about_blank">
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
                <form action="mailto:contact@yannicksf.com?subject=Offre Mark Infinity" method="GET">
                  <p class="card-footer-item">
                    <button class="button is-success is-light is-large">Commander</button>
                  </p>
                </form>
                <p class="card-footer-item">
                  <button v-clipboard:copy="ynovF" v-on:click="copied()" class="button is-info is-light is-medium">Partager</button>
                </p>
              </footer>
            </div>
            </a>
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
      ynovI: "Ynov I|Développement de Site internet : Vitrine, Blog, Boutique|Responsive design adapté pour mobiles et tablettes|Référencement Naturel|Hébergement inclus|A Partir de 1250€|https://ynov1.yannicksf.com",
      ynovII: "Ynov II|Développement d'Application Desktop, Application Web ou création d'API|Assistance à la conception|Développement en méthode agile|Hébergement inclus|A Partir de 3000€|https://ynov2.yannicksf.com",
      ynovF: "Ynov F|Vous avez une idée qui veut voir le jour ?|Un besoin en développement ?|De conseils ou de formations ?|D'Automatiser des tâches ?|DEVIS GRATUIT sur Mesure|https://ynovf.yannicksf.com"
    }
  },
  methods: {
    copied: function(){
      alert('copié !')
    }
  }
};
</script>
