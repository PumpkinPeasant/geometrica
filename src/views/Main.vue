<template>
  <v-parallax dark src="../assets/earth2.png">
    <div class="home">
      <v-btn @click.prevent="signOut" color="#771AEE" dark>
      <span>LAUNCH
        <v-icon left v-html="'mdi-arrow-right-circle-outline'" color="#FFFFFF"></v-icon>
      </span>
      </v-btn>
      <div>
        <v-card v-for="(item, i) in info" :key="`info${i}`" :to="item">
          <v-icon left v-html="item.icon"></v-icon>
          {{ item }}
        </v-card>
      </div>
      <div>
      </div>
      <div>
        <img alt="Vue logo" src="../assets/map.svg">
      </div>
    </div>
  </v-parallax>
</template>

<script>
export default {
  name: 'Main',
  components: {},
  data() {
    return {
      player: [],
    };
  },
  methods: {
    add() {
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.home {
  grid-auto-columns: 1fr 1fr;
  position: absolute;
  min-width: auto;
}
</style>
