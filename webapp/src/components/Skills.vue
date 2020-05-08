<template>
  <section id="skills" class="hero is-black is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">Skills</p>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="item in slist" v-bind:key="item">
            <SingleSkill :item="item" />
          </div>
        </div>
        <p class="is-subtitle">Et bien d'autres compétences encore..</p>
      </div>
    </div>
  </section>
</template>

<script>
import SingleSkill from '@/components/singlePages/SingleSkill.vue'
export default {
  name: "Skill",
  data(){
    return {
      slist: [
        {
          box: 'Languages',
          skills: [
            {name: 'Java', value: 60},
            {name: 'JavaScript', value: 60},
            {name: 'Python', value: 70},
            {name: 'Groovy', value: 60},
            {name: 'HTML/CSS', value: 60}
          ]
        },
        {
          box: 'Framework',
          skills: [
            {name: 'Vue JS', value: 70},
            {name: 'Flask', value: 60},
            {name: 'Spring', value: 60},
            {name: 'SpringBoot', value: 60},
            {name: 'Groovy', value: 60},
            {name: 'Nest JS', value: 60}
          ]
        },
        {
          box: 'Devops',
          skills: [
            {name: 'Docker', value: 50},
            {name: 'Jenkins', value: 50},
            {name: 'Gitlab', value: 60},
            {name: 'Github', value: 60},
            {name: 'Netlify', value: 60}
          ]
        },
        {
          box: 'Connaissances Secteurs',
          skills: [
            {name: 'Secteurs Public', value: 50},
            {name: 'Grande Distribution', value: 60},
            {name: 'Commerce et Vente', value: 70},
            {name: 'Automatisation', value: 60}
          ]
        }
      ]
    }
  },
  components: {
    SingleSkill
  }
};
</script>

<style>

</style>
