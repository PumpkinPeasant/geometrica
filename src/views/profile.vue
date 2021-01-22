<template>
    <v-container fluid>

      <v-row >
        <v-col >
          <v-img max-width="auto" max-height="350" src="../assets/profilebg.png" gradient="to top right,rgba(135,41,255,.7),rgba(129,90,181,.33)" >
              <v-row no-gutters>
                <v-col class="pa-2" align="center" >
                  <v-avatar left min-width="200" height="200" >
                    <v-img  src="../assets/alien.gif"></v-img>
                  </v-avatar>
                  <div >
                    <p class="display-2 white--text">{{player.nickname}}</p>
                    <p class="display-5 white--text">Капитан, ур.1</p>
                  </div>

                </v-col>
            </v-row>
            <v-row justify="center">
            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="white"
                    dark
                    outlined
                    v-bind="attrs"
                    v-on="on"
                >
                  Изменить профиль
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Ваш профиль</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="Никнейм"
                            name="name"
                            type="name"
                            color="purple accent-4"
                            v-model="player.nickname"
                            :rules="nameRules"
                        />
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-select
                            label="Гендер"
                            name="Gender"
                            type="text"
                            color="purple accent-4"
                            v-model="player.gender"
                            :items="genders.map(m => m.value)"
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-menu
                            ref="menu_cost"
                            v-model="menu_cost"
                            :close-on-content-click="false"
                            :return-value.sync="player.birth_date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                color="purple accent-4"
                                v-model="player.birth_date"
                                label="Дата рождения"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="player.birth_date"
                              @change="editedDocument.DatePrices = player.birth_date"
                              no-title
                              scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="red"
                                @click="$refs.menu_cost.save(player.birth_date = null)"
                            >
                              Отменить
                            </v-btn>
                            <v-btn
                                text
                                color="purple accent-4"
                                @click="$refs.menu_cost.save(player.birth_date)"
                            >
                              Принять
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="purple accent-4"
                            v-model="player.email"
                            :rules="emailRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            id="password"
                            label="Пароль"
                            name="Password"
                            type="password"
                            color="purple accent-4"
                            v-model="player.password"
                            :rules="passwordRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" align="center">
                        <v-btn color="red" outlined @click="deleteAccount = true">Удалить аккаунт</v-btn>
                        <div class="pa-2" v-if="deleteAccount">
                          <p>Вы действительно хотите удалить аккаунт?</p>
                          <p id="confDelete" class="red--text text-accent-2" @click="confirmDeleteAccount = true">Да, я хочу удалить аккаунт</p>
                          <p id="rejDelete"  class="purple--text text-accent-2" @click="deleteAccount = false">Нет, я передумал</p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="red"
                      text
                      @click="dialog = false"
                  >
                    Закрыть
                  </v-btn>
                  <v-btn
                      color="purple accent-4"
                      text
                      @click="dialog = false"
                  >
                    Сохранить
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          </v-img>

        </v-col>

      </v-row>

      <v-row class="pa-2">

        <v-col md="2" color="">
          <v-row>
            <v-col >
              <h2>Друзья</h2>
              <p align="center" class="pa-2">У вас пока нет друзей...</p>
            </v-col>
          </v-row>
          <v-row >
            <v-col>
              <h2>Поиск друзей</h2>
              <v-text-field
                  outlined
                  label="Найти друга"
                  append-icon="mdi-account-search-outline"
                  color="purple accent-4"
              ></v-text-field>

              <v-list
                  style="max-height: 400px"
                  class="overflow-y-auto"
              >
                <template
                    v-for="user in users"
                >
                  <v-card color="white" :key="user.uid" flat>
                    <v-card-actions>
                      <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                          <v-img
                              class="elevation-6"
                              alt=""
                              src="../assets/alien.gif"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>{{user.uid}}</v-list-item-title>
                        </v-list-item-content>

                        <v-row
                            align="center"
                            justify="end"
                        >
                          <v-btn
                              class="ma-2"
                              text
                              icon
                              color="purple accent-4"
                          >
                            <v-icon>mdi-account-plus-outline</v-icon>
                          </v-btn>
                        </v-row>
                      </v-list-item>
                    </v-card-actions>

                  </v-card>
                </template>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="10">
          <h2>Ваши игры</h2>
          <v-data-table
              :headers="headers"
              :items="userGames"
              :items-per-page="10"
          >
            <template v-slot:item.rightguesses="{ item }">
              <v-chip
                  :color="'green'"
                  dark
              >
                {{ item.rightguesses }}
              </v-chip>
            </template>
            <template v-slot:item.wrongguesses="{ item }">
              <v-chip
                  :color="'red'"
                  dark
              >
                {{ item.wrongguesses }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                  small
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>

            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import {Player} from "@/models/player";

export default {
  pageTitle: 'My Profile',
  data () {
    return {
      loading: false,
      dialog: false,
      player: new Player(),
      userGames: [],
      countries:[],
      genders:[],
      confirmDeleteAccount: false,
      deleteAccount: false,
      users:[
        {uid: 'Игрок 1'},
        {uid: 'Игрок 2'},
        {uid: 'Cube'},
        {uid: 'Игрок 1'},
        {uid: 'Игрок 2'},
        {uid: 'Cube'},
        {uid: 'Игрок 1'},
        {uid: 'Игрок 2'},
        {uid: 'Cube'},
        {uid: 'Игрок 1'},
        {uid: 'Игрок 2'},
        {uid: 'Cube'},
      ],
      headers: [
        {
          text: 'ID Игры',
          align: 'start',
          value: 'gameid',
        },
        { text: 'Правильные ответы', value: 'rightguesses' },
        { text: 'Неправильные ответы', value: 'wrongguesses' },
        { text: 'Время проходжения (сек.)', value: 'time' },
        { text: 'Раунд', value: 'roundnum' },
        { text: 'Действия', value: 'actions' , sortable: false},
      ],
      emailRules: [
        (v) => !!v || 'Пожалуйста введите email',
        (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
      ],
      passwordRules: [
        (v) => !!v || 'Пожалуйста введите пароль',
        (v) => (v && v.length >= 6) || 'Пароль должен состоять как минимум из шести символов'
      ],
      nameRules: [
        (v) => !!v || 'Пожалуйста введите имя',
        (v) => (v && v.length >= 2) || 'Имя должно состоять как минимум из двух символов'
      ],
    }
  },
  methods: {

  },
  mounted() {
    this.$store.commit('pullUserGames', {
      id: this.$store.getters.getPlayer.uid,
      token: this.$store.getters.getToken
    })
    this.$store.getters.getCountries.then(data => this.countries = data)
    this.$store.getters.getGenders.then(data => this.genders = data)

  },
  watch: {
    '$store.state.AuthService.isAuthorized': {
      immediate: true,
      handler() {
        if (this.$store.getters.getsAuthorized) {
          this.player = this.$store.getters.getPlayer
        }

      }
    },
    '$store.state.GameService.userGames': {
      immediate: true,
      handler() {
        this.userGames = this.$store.getters.getUserGames
      }
    },
  }
}
</script>

<style scoped>
#confDelete, #rejDelete{
  cursor: pointer;
}
#confDelete, #rejDelete:hover{
  text-decoration: underline;
}
</style>