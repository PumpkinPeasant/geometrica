export default {
    state: {
        player:[]

    },
    mutations: {
        setPlayer(state, payload){
            state.player = payload
        },
        logoutPlayer(state){
            state.player = []
        }
    },
    actions: {

    },
    getters: {
        getPlayer: (state) => state.player,
    }
}