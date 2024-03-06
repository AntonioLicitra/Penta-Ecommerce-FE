<script>
import { RouterView } from "vue-router";
import Header from './components/Header.vue';
import Header2 from './components/Header2.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Header2,
    Footer
  }
}
</script>

<template>
  <Header />
  <Header2 />
	<RouterView />
  <Footer />
</template>
