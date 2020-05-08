<template>
  <nav
    class="navbar is-fixed-top is-black"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://yannicksf.com">
        <img
          src="../assets/icon.png"
          alt="Yannick SF Service de développement informatique"
        />
      </a>
    </div>
    <div class="navbar-menu">
      <a class="navbar-item" href="#header">Profil</a>
      <a class="navbar-item" href="#skills">Skills</a>
      <a class="navbar-item" href="#oeuvres">Works</a>
      <a class="navbar-item" href="#offers">Services</a>
      <!--<a class="navbar-item" href="#feedback">Feedbacks</a>-->
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
