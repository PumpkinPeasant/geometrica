import {HttpService} from "@/store/HttpService";

export default {
    state: {
        service: new HttpService('http://localhost:5000/Home/'),
    },
    getters: {
        getGenders (state) {
            return state.service.Get('genders').then(req => req.data)
        },
        getCountries (state) {
            return state.service.Get('countries').then(req => req.data)
        }
    }
}