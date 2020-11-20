<template>
  <section
    class="hero is-fullheight-with-navbar"
    style="background-color: #d91e36;"
  >
    <div>
      <p class="title is-1" style="padding-top: 2%; color: #000000;">
        Mes Services
      </p>

      <div class="section" style="padding-top: 2%; margin-bottom: 5%;">
        <div class="columns">
          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov I</p>
                <hr />
                <p class="subtitle">
                  Vous voulez développer un site internet pour votre activitée
                  ?<br />
                  Contactez-moi nous voyons ensemble quelle solution est la plus
                  adapté à votre besoin.
                  <br />
                  <br />
                  <span class="tag is-success is-large is-rounded"
                    >A Partir de 1500€</span
                  >
                </p>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item button is-success is-light is-large"
                  href="https://ynov1.yannicksf.com"
                  target="_about_blank"
                >
                  Devis Gratuit
                </a>
                <a
                  v-clipboard:copy="ynovI"
                  v-on:click="copied()"
                  class="card-footer-item button is-info is-light is-large"
                >
                  Partager
                </a>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov II</p>
                <hr />
                <p class="subtitle">
                  Conception et Développement d'<strong
                    >Application Desktop</strong
                  >, d'<strong>Application Web</strong> ou
                  d'<strong>API</strong>. Renfort en conception et/ou
                  développement dans un projet existant.
                  <br />
                  <br />
                  <span class="tag is-success is-large is-rounded"
                    >A Partir de 2000€</span
                  >
                </p>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item button is-success is-light is-large"
                  href="https://ynov2.yannicksf.com"
                  target="_about_blank"
                >
                  Devis Gratuit
                </a>
                <a
                  v-clipboard:copy="ynovII"
                  v-on:click="copied()"
                  class="card-footer-item button is-info is-light is-large"
                >
                  Partager
                </a>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card box">
              <div class="card-content">
                <p class="title" style="color: #19647eff;">Ynov F</p>
                <hr />
                <p class="subtitle">
                  Vous avez une idée qui veut voir le jour, besoin d'un conseil,
                  d'une formation, ou d'un acte ponctuel ?
                  <br />
                  <br />
                  <span class="tag is-success is-large is-rounded"
                    >A Partir de 125€</span
                  >
                </p>
              </div>
              <footer class="card-footer">
                <a href="https://ynovf.yannicksf.com" target="_about_blank"
                  ><a
                    class="card-footer-item button is-success is-light is-large"
                  >
                    Devis Gratuit
                  </a></a
                >
                <a
                  v-clipboard:copy="ynovF"
                  v-on:click="copied()"
                  class="card-footer-item button is-info is-light is-large"
                >
                  Partager
                </a>
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
  data: function() {
    return {
      ynovI: "Ynov I by Yannick S. FELER \n|https://ynov1.yannicksf.com",
      ynovII: "Ynov II by Yannick S. FELER \n|https://ynov2.yannicksf.com",
      ynovF: "Ynov F by Yannick S. FELER \n|https://ynovf.yannicksf.com",
    };
  },
  methods: {
    copied: function() {
      alert("copié !");
    },
  },
};
</script>
