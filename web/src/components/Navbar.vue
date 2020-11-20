<template>
    <nav id="nav" class="navbar is-fixed-top" style="background-color: black; text-align: center; 
    display: block; width: 100%; 
    height: 50px; margin-top: -25px;">
      <router-link to="/">Acceuil</router-link> |
      <router-link to="/apropos">A Propos</router-link> |
      <router-link to="/produits">Produits & Services</router-link>
    </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>