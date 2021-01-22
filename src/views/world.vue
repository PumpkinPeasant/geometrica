<template>
  <div class="pa-2 text-center">
  <h1 class="display-3">Статистика Мир: ТОП 100</h1>
    <v-data-table
        :headers="headers"
        :items="allGames"
        :items-per-page="20"
        sort-by="rightguesses"
        sort-desc
    ></v-data-table>
  </div>
</template>

<script>


export default {
name: "world",
  data () {
    return {
      allGames: [],
      headers: [
        {
          text: '№',
          align: 'start',
          value: '1',
          sortable: false,
        },
        { text: 'Игрок', value: 'player',sortable: false },
        { text: 'Правильные ответы', value: 'rightguesses',sortable: false },
        { text: 'Неправильные ответы', value: 'wrongguesses', sortable: false, },
        { text: 'Время проходжения (сек.)', value: 'time', sortable: false, },
      ],
    }
},
  mounted() {
    this.$store.commit('pullAllGames')

  },
watch: {
  '$store.state.GameService.allGames': {
    immediate: true,
        handler() {
        this.allGames = this.$store.getters.getAllGames
          console.log(this.allGames)
    }
  },
}
}

</script>

<style scoped>

</style>