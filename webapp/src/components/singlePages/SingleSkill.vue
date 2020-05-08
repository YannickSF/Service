<template>
  <div class="card box">
    <div class="card-content">
        <p class="title has-text-black">{{ item.box }}</p>
        <div class="level" v-for="obj in item.skills" v-bind:key="obj">
          <div class="level-item">
            <p>{{ obj.name }}</p>
          </div>
          <div class="level-item">
            <progress class="progress is-info" :value="obj.value" max="100">{{ obj.value }}</progress>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleSkill",
  props: {item: Object}
};
</script>
