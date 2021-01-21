<template>
  <div>
        <v-app-bar app color="white" flat>
          <router-link to="/" tag="span" style="cursor: pointer">
            <v-toolbar-title>
              <span>
                <v-icon v-html="'mdi-earth'" color="#771AEE" large></v-icon> GeoMetrica
              </span>
            </v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-tabs centered class="ml-n9" color="#771AEE">
            <v-tab v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
              <v-icon left v-html="item.icon"></v-icon>
              {{item.title}}
            </v-tab>
          </v-tabs>
          <div class="text-center" v-if="player">
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    fab
                    color="purple accent-4"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                          src="../assets/ailien.svg"
                          alt="Alien"
                      >
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{player.nickname}}</v-list-item-title>
                      <v-list-item-subtitle>Капитан, ур.1</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn
                          :class="fav ? 'red--text' : ''"
                          icon
                          @click="fav = !fav"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-btn :to="'/profile'" outlined  color="purple">Профиль</v-btn>
                  </v-list-item>

                  <v-list-item>
                    <v-btn outlined color="red" :to="'/'" @click="logOut">Выйти</v-btn>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </v-app-bar>
  </div>
</template>

<script>
export default {
name: "NavBar",
  data(){
    return{
      color: '#771AEE',
      player: this.$store.getters.getPlayer,
    }
  },
  methods:{
  logOut(){
    this.$store.commit('logoutPlayer')
    this.player = []
  }
  },
  mounted() {

  },
  computed:{
    menuItems(){
      return [
      {
        title: 'Статистика: Мир',
        route: '/world',
        icon: null
      },
        {
          title: 'Статистика: Россия',
          route: '/russia',
          icon: null
        },
        {
          title: 'О нас',
          route: '/about',
          icon: null
        },
        {
          title: null,
          route: '/login',
          icon: 'mdi-lock-outline'
        }

      ]
    }
}
}
</script>

<style scoped>

</style>