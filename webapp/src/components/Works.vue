<template>
  <section id="oeuvres" class="hero is-light is-medium">
    <div class="hero-body">
      <div class="container">
        <p class="title">Works</p>
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="item in oeuvres" v-bind:key="item">
            <SingleOeuvre :item=item />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleOeuvre from '@/components/singlePages/SingleOeuvre.vue'
export default {
    name: 'Works',
    data(){
        return {
          oeuvres: [
            {
              site: 'https://yannicksf.com',
              site_img: 'https://aprc.it/api/640x480/http://yannicksf.fr/',
              titre: 'YannickSF Blog',
              description: 'Blog personnel'
            },
            {
              site: 'https://news.yannicksf.com',
              site_img: 'https://aprc.it/api/640x480/http://news.yannicksf.fr/',
              titre: 'YannickSF News',
              description: 'Site de veille personnel'
            },
            {
              site: '#offers',
              site_img: 'https://picsum.photos/200/300',
              titre: 'Votre projet ?',
              description: 'Venez en discuter :)'
            }
        ]
      }
    },
    components: {
      SingleOeuvre
    }
}
</script>