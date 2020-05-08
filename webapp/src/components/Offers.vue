<template>
  <section id="offers" class="hero is-black is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          Services
        </p>
        <div class="columns is-multiline is-centered">
          <div class="column is-two-fifths">
            <SingleOffre :item=offres[0] />
          </div>
          <div class="column is-two-fifths">
            <SingleDemand :item=offres[1] />
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
        titre: 'John Smith',
        subtitre: '@johnsmith'},
        {img: 'https://bulma.io/images/placeholders/1280x960.png',
        titre: 'John Smith',
        subtitre: '@johnsmith',
        content: "vous avez un besoin ? \
        nous voyons ensemble quelles solutions je peux vous apporter"}
        ]
    }
  },
  components: {
    SingleOffre,
    SingleDemand
  }
};
</script>
