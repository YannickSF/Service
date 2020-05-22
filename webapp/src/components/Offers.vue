<template>
  <section id="offers" class="hero is-black is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          Services
        </p>
        <div class="columns is-multiline is-centered">
          <div class="column is-one-third">
            <SingleOffre :item=offres[0] />
          </div>
          <div class="column is-one-third">
            <SingleOffre :item=offres[1] />
          </div>
          <div class="column is-one-third">
            <SingleOffre :item=offres[2] />
          </div>
          <div class="column is-one-third">
            <SingleDemand :item=offres[3] />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleOffre from '@/components/singlePages/SingleOffre.vue'
import SingleDemand from '@/components/singlePages/SingleDemand.vue'

export default {
  name: "Offre",
  data(){
    return {
      offres: [
        {img: 'https://bulma.io/images/placeholders/1280x960.png',
        titre: 'V-FYS-01',
        subtitre: 'Site de présentation',
        describe: ['Site de présentation', 'Achat du domaine', 'Développement', 'Mise en production', 'Reprise de contenue', 'SEO'],
        price: 500},
        {img: 'https://bulma.io/images/placeholders/1280x960.png',
        titre: 'B-FYS-01',
        subtitre: 'Blog',
        describe: ['Blog', 'Achat du domaine', 'Développement','Mise en production', 'Reprise de contenue', 'SEO'],
        price: 800},
        {img: 'https://bulma.io/images/placeholders/1280x960.png',
        titre: 'E-FYS-01',
        subtitre: 'Site de vente',
        describe: ['Site de vente', 'Achat du domaine', 'Développement','Mise en production', 'Reprise de contenue', 'SEO'],
        price: 1100},
        {img: 'https://bulma.io/images/placeholders/1280x960.png',
        titre: 'OD-FYS-01',
        subtitre: 'Application Web / POC',
        content: "vous avez une idée d'application ? \
        Un concepte à améliorer ? \
        Faites appels à mes services."}
        ]
    }
  },
  components: {
    SingleOffre,
    SingleDemand
  }
};
</script>
