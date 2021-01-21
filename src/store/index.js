import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '@/store/user.js';
import AuthService from "@/store/AuthService";
import HomeService from "@/store/HomeService";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    AuthService,
    HomeService
  }
})

