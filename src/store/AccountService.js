import {HttpService} from "@/store/HttpService";
import {Player} from "@/models/player";

export default {
    state: {
        service: new HttpService('http://localhost:5000/Account/'),
        player: new Player(),
    },
    mutations: {
        setPlayer(state, payload) {
            state.player = payload
        },
        deleteAccount(state, payload) {
            state.service.Delete(state.player.uid + '/deletePlayer',
                {
                    email: state.player.email,
                    password: state.player.password,
                },
                {
                    'Authorization': 'Bearer ' + payload.token
                })
                .then(res => payload.action(res.data))
                .catch(err => payload.handle(err))
        },
        updateAccount(state, payload) {
            state.service.Put('updatePlayer', state.player, {
                headers: {
                    'Authorization': 'Bearer ' + payload.token
                }
            })
                .then(res => payload.action(res.data))
                .catch(err => payload.handle(err))

        },
        findFriends(state, payload) {
            state.service.Get('findFriends/' + payload.name, {
                headers: {
                    'Authorization': 'Bearer ' + payload.token
                }
            })
                .then(res => payload.action(res.data))
                .catch(e => payload.handle(e))
        },
        deleteGame(state, payload) {
            state.service.Delete(state.player.uid + 'deleteGame' + payload.gameId,
                {email: state.player.email, password: state.player.password},
                {'Authorization': 'Bearer ' + payload.token})
                .then(res => payload.action(res))
                .catch(res => payload.handle(res))
        }
    },
    getters: {
        getPlayer: (state) => state.player,
    }
}