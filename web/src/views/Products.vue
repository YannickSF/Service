<template>
  <div class="products section" style="padding-top: 5%;">
    <div class="section columns is-multiline">
      <div class="column is-one-third">
        <Ynov1 />
      </div>
      <div class="column is-one-third">
        <Ynov2 />
      </div>
      <div class="column is-one-third">
        <YnovF />
      </div>
      <div class="column is-one-third">
        <NWYnov1 />
      </div>
      <div class="column is-one-third">
        <NWInfoG1 />
      </div>
    </div>
  </div>
</template>

<script>
import NWYnov1 from '@/components/products/NWYnov1.vue'
import NWInfoG1 from '@/components/products/NWInfoG1.vue'
import Ynov1 from '@/components/products/Ynov1.vue'
import Ynov2 from '@/components/products/Ynov2.vue'
import YnovF from '@/components/products/YnovF.vue'

export default {
  name: 'Products',
  components: {
    NWYnov1,
    NWInfoG1,
    Ynov1,
    Ynov2,
    YnovF
  },
};
</script>
