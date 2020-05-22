<template>
  <div class="card box">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="item.site_img" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-black">{{ item.titre }}</p>
          <p class="subtitle is-6 has-text-black">{{ item.description }}</p>
          <p><a :href="item.site">Voir</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleOeuvre",
  props: { item: Object },
};
</script>
