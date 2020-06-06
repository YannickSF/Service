<template>
  <div class="card box">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="item.img"
          alt="Placeholder image"
        />
      </figure>
    </div>

    <div class="card-content">
      <div class="media-content">
        <p class="title is-4 has-text-black has-text-centered">{{ item.titre }}</p>
        <p class="subtitle is-6 has-text-black has-text-centered">{{ item.subtitre }}</p>
      </div>
      <br/>
      <table class="table">
        <tbody>
          <tr v-for="l in item.describe" v-bind:key="l">
            <td>{{ l }}</td>
          </tr>
        </tbody>
      </table>
      <DetailOffer v-show="showModal" @close="showModal = false" v-bind:offre="item"></DetailOffer>
      <button class="button is-success is-medium is-fullwidth" @click="showModal = true">Commander - {{ item.price }} €</button>
    </div>
  </div>
</template>

<script>
import DetailOffer from "@/components/pages/DetailOffers.vue";

export default {
  name: "SingleOffre",
  props: {item: Object},
  data: function(){ 
    return {
      showModal: false
    }
  },
  components: {
    DetailOffer
  }
};
</script>
