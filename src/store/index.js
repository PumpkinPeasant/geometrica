import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from "@/store/AuthService";
import HomeService from "@/store/HomeService";
import GameService from "@/store/GameService";
import AccountService from "@/store/AccountService";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthService,
    HomeService,
    GameService,
    AccountService
  }
})
