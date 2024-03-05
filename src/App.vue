<script>
import { RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';

export default {
  components: {
    Header,
    Footer

}
}
</script>



<template>
  <Header />
	<RouterView />
  <Card />
  <Footer />
</template>


