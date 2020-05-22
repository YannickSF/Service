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

      <button class="button is-success is-medium is-fullwidth">Commander - {{ item.price }} €</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleOffre",
  props: {item: Object} 
};
</script>
