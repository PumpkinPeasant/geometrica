import {HttpService} from "@/store/HttpService";

export default {
    state: {
        service: new HttpService('http://localhost:5000/Game/') ,
        allGames: [],
        userGames: []
    },
    mutations: {
        pullAllGames(state){
            state.service.Get('games').then(res => {
                state.allGames = res.data
            })
        },
        pullUserGames(state, payload){
            state.service.Get(payload.id + '/games', {
                headers: {
                    'Authorization': 'Bearer ' + payload.token
                }
            }).then(res => {
                state.allGames = res.data
            })
        },
    },
    getters: {
        getAllGames: (state) => state.allGames,
        getUserGames: (state) => state.allGames,
    }
}