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
        <p class="title is-4 has-text-black">{{ item.titre }}</p>
        <p class="subtitle is-6 has-text-black">{{ item.subtitre }}</p>
      </div>
      <br />
      <div class="content">
          {{ item.content }}
      </div>

      <button class="button is-success is-medium is-fullwidth">Devis Gratuit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleDemand",
  props: {item: Object} 
};
</script>
