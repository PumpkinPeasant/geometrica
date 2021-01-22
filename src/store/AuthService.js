import {HttpService} from "@/store/HttpService";
import {Player} from "@/models/player";

export default {
    state: {
        service: new HttpService('http://localhost:5001/Auth/'),
        player: new Player(),
        isAuthorized: false,
        allPlayers: []
    },
    mutations: {
        signUp(state, payload) {
            state.service.Post('signUp', payload.player)
                .then(req => {
                    localStorage.setItem('token', req.data.access_token);
                    payload.player = req.data.player
                    state.isAuthorized = true
                    payload.action()
                })
                .catch(e => {
                    payload.errorHandler(e)
                })
        },
        signIn(state, payload) {
            state.service.Post('signIn', payload.player)
                .then(req => {
                    localStorage.setItem('token', req.data.access_token);
                    state.isAuthorized = true
                    payload.player = req.data.player
                    console.log(state.player)
                    payload.action()
                })
                .catch(e => {
                    payload.errorHandler(e)
                })
        },
        logOut(state, action) {
            state.isAuthorized = false
            localStorage.removeItem('token')
            action()
        },
        pullAllPlayers(state){
            state.service.Get('getPlayers')
        }
    },
    getters: {
        getToken: () => localStorage.getItem('token'),
        getsAuthorized: (state) => state.isAuthorized,
    }
}