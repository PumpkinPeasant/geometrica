<template>
  <v-app>
    <NavBar></NavBar>
    <v-content fluid><router-view/></v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
