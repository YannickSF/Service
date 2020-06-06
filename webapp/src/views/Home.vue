<template>
  <div>
    <NavBar />
    <Header />
    <!--
    <Skill />
    <Works />
    <Offre />
    <Feedback />
    -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
// import Skill from "@/components/Skills.vue";
// import Offre from "@/components/Offers.vue";
// import Works from "@/components/Works.vue";
// import Feedback from "@/components/Feedbacks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar, 
    Header,
    Footer
  }
};
</script>
