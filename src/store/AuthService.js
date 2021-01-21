import {HttpService} from "@/store/HttpService";
import {Player} from "@/models/player";

export default {
    state: {
        service: new HttpService('http://localhost:5001/Account/'),
        player: new Player()
    },
    mutations: {
        signUp(state, payload) {
            state.service.Post('signUp', payload.player)
                .then(req => {
                    localStorage.setItem('token', req.data.access_token);
                    payload.action()
                    state.player = req.data.player
                })
                .catch(e => {
                    payload.errorHandler(e)
                })
        },
        signIn(state, payload) {
            state.service.Post('signIn', payload.user)
                .then(req => {
                    localStorage.setItem('token', req.data.access_token);
                    state.player = req.data.player
                    payload.action()
                })
                .catch(e => {
                    payload.errorHandler(e)
                })
        },
        logOut(state, action) {
            localStorage.removeItem('token')
            action()
        }
    },
    getters: {
        getToken: () => localStorage.getItem('token')
    }
}