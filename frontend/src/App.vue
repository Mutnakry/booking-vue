<!-- src/App.vue -->
<template>
<NavbarVue/>
  <router-view></router-view>
<Footer/>
</template>
<script>
import NavbarVue from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {NavbarVue,Footer},
};
</script>