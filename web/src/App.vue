<template>
  <div id="app">
    <navbar />
    <router-view />
    <baspage />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import baspage from '@/components/Baspage.vue'

export default {
  components: {
    navbar,
    baspage
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfcff;
  background-color: #000000;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fbfcff;
}

#nav a.router-link-exact-active {
  color: #d91e36;
}
</style>
