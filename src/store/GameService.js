import {HttpService} from "@/store/HttpService";

export default {
    state: {
        service: new HttpService('http://localhost:5000/Game/') ,
        userGames: [],
        allGames: []
    },
    mutations: {
        pullUserGames(state, payload){
            state.service.Get(payload.id + '/games', {
                headers: {
                    'Authorization': 'Bearer ' + payload.token
                }
            }).then(res => {
                state.userGames = res.data
            })
        },
        pullAllGames(state){
            state.service.Get('games').then(res => {
                state.allGames = res.data
            })
        },

    },
    getters: {
        getUserGames: (state) => state.userGames,
        getAllGames: (state) => state.allGames


    }
}