<template>
  <div>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col >
            <v-card flat>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="7">
                      <v-card-text class="mt-12">
                        <h1 class="display-2 "><b>Войти </b></h1>
                        <h5 class="display-1 purple--text text-accent-4">С возвращением, капитан!</h5>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-vk'"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-google'"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-twitter'"></v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Подтвердите свой e-mail для входа</h4>
                        <v-form v-model="valid">
                          <v-text-field
                              label="Email"
                              name="Email"
                              type="text"
                              color="purple accent-4"
                              v-model="loginUser.email"
                              :rules="emailRules"
                          />
                          <v-text-field
                              id="password"
                              label="Пароль"
                              name="Password"
                              type="password"
                              color="purple accent-4"
                              v-model="loginUser.password"
                              :rules="passwordRules"
                          />
                          <v-alert :value="error">
                            <h4 class="text-center mt-4">{{error}}</h4>
                          </v-alert>
                        </v-form>
                        <h3 class="text-center mlt-3">
                          Я не помнб пароль
                        </h3>
                      </v-card-text>
                      <div class="text-center mlt-3">
                        <v-btn rounded color="purple accent-4 " dark @click.prevent="signin">Войти</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="5" class="purple accent-4" >
                      <v-card-text class="white--text mt-12" >
                        <v-img src="../assets/tesla.svg"></v-img>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark @click="step++">Регистрация</v-btn>
                      </div>
                    </v-col>
                  </v-row>

                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="purple accent-4">
                      <v-card-text class="white--text mt-12" >
                        <v-img src="../assets/privet.svg"></v-img>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Войти</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="mb-6 display-2  text-center"><b>Зарегистрироваться</b></h1>
                        <h1 class="mb-6 text-center display-5 purple--text text-accent-2"><b>Добро пожаловать на борт, капитан!</b></h1>
                        <h3 class="mb-6 text-center  purple--text text-accent-2">Играй с друзьями и другими игроками со всего мира!</h3>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-vk'"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-google'"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon v-html="'mdi-twitter'"></v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Подтвердите свой e-mail для регистрации</h4>
                        <v-form v-model="valid">
                          <v-text-field
                              label="Никнейм"
                              name="name"
                              type="name"
                              color="purple accent-4"
                              v-model="registerUser.name"
                              :rules="nameRules"
                          />
                          <v-select
                              label="Гендер"
                              name="Gender"
                              type="text"
                              color="purple accent-4"
                              v-model="registerUser.gender"
                              :items="genders.map(m => m.value)"
                          ></v-select>
                          <v-menu
                              ref="menu_cost"
                              v-model="menu_cost"
                              :close-on-content-click="false"
                              :return-value.sync="registerUser.birth_date"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                  color="purple accent-4"
                                  v-model="registerUser.birth_date"
                                  label="Дата рождения"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="registerUser.birth_date"
                                @change="editedDocument.DatePrices = registerUser.birth_date"
                                no-title
                                scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn
                                  text
                                  color="red"
                                  @click="$refs.menu_cost.save(registerUser.birth_date = null)"
                              >
                                Отменить
                              </v-btn>
                              <v-btn
                                  text
                                  color="purple accent-4"
                                  @click="$refs.menu_cost.save(registerUser.birth_date)"
                              >
                                Принять
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                          <v-combobox
                              label="Страна проживания"
                              name="Country"
                              type="text"
                              color="purple accent-4"
                              v-model="registerUser.country"
                              :items="countries.map(m => m.nicename)"
                          ></v-combobox>
                          <v-text-field
                              label="Email"
                              name="Email"
                              type="text"
                              color="purple accent-4"
                              v-model="registerUser.email"
                              :rules="emailRules"
                          />
                          <v-text-field
                              id="password"
                              label="Пароль"
                              name="Password"
                              type="password"
                              color="purple accent-4"
                              v-model="registerUser.password"
                              :rules="passwordRules"
                          />
                          <v-alert :value="error" type="error" v-if="error !== ''">
                            {{error}}
                          </v-alert>


                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="purple accent-4" dark @click.prevent="commitToDB()"> Зарегистрироваться</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
name: "login",
data() {
  return {
    step: 1,
    email: '',
    password: '',
    valid: false,
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
    countries:[],
    genders:[],
    player: [],
    error:'',
    registerUser:{
      name: '',
      gender: '',
      birth_date: '',
      country: '',
      email: '',
      password: '',
    },
    loginUser:{
      email: '',
      password: '',
    },
  }
},
  mounted() {
    this.$http.get('http://localhost:5001/Game/countries').then(response => this.countries = response.data)
    this.$http.get('http://localhost:5001/Account/genders').then(response => this.genders = response.data)
  },
  methods:{
    commitToDB(){
      this.player = []
      this.message = ''
      this.error = ''
      let req = {
        nickname: this.registerUser.name,
        genderid: this.genders.filter(d => d.value === this.registerUser.gender).map(d => d.genderid)[0],
        birthdate: this.registerUser.birth_date,
        countryid: this.countries.filter(d => d.nicename === this.registerUser.country).map(d => d.countryid)[0],
        email: this.registerUser.email,
        password: this.registerUser.password
      }
      console.log(req)
      this.$http.post('http://localhost:5001/Account/signUp', req).then(res => {
        console.log(res.data)
        this.$store.commit('setPlayer', res.data)
        this.$router.push({ path: '/' })
      }).catch(() => this.error = "Не удалось зарегистрировать пользователя :(");


    },
    signin(){
      this.player = []
      let req = {
        email: this.loginUser.email,
        password: this.loginUser.password
      }
      console.log(req)
      this.$http.post('http://localhost:5001/Account/signIn', req).then(res => {
        console.log(res.data)
        this.$store.commit('setPlayer', res.data)
        this.$router.push({ path: '/' })
      }).catch(() => this.error = "Не удалось войти :(");
    }
  }
}
</script>

<style scoped>

</style>