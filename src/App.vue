<script>
import { RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
