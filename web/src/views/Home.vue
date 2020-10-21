<template>
  <div class="home">
    <div class="container"> <profil /></div>

    <br />
    <br />
    <br />

    <offers />

    <br />
    <br />
    <br />

    <div class="container" style="padding-bottom: 6%;"> <contact /> </div>
  </div>
</template>

<script>

import profil from '@/components/home/Profil.vue'
import offers from '@/components/home/Offers.vue'
import contact from '@/components/home/Contact.vue'

export default {
  name: "Home",
  components: {
    profil,
    offers,
    contact
  }
};
</script>
