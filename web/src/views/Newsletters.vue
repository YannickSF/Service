<template>
  <div class="section">
    <div class="columns is-multiline">
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
import NWYnov1 from '@/components/newsletters/NWYnov1.vue'
import NWInfoG1 from '@/components/newsletters/NWInfoG1.vue'

export default {
  name: 'Newsletters',
  components: {
    NWYnov1,
    NWInfoG1
  },
};
</script>
