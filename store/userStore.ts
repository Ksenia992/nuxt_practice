import {
    VuexModule, Module, Mutation, Action, MutationAction
} from 'vuex-module-decorators';
import axios from 'axios'
import Localstorage from "../plugins/setUserKey";

@Module({ name: 'userStore', stateFactory: true, namespaced: true })
export default class UserStore extends VuexModule {
    json: null | any = null



    @MutationAction({ mutate: ['json'] })
    async setJson(payload: any) {
        const { data } = await axios.get("https://randomuser.me/api/")
        console.log(data.results[0])
        if (data) {
            Localstorage.set('userKey', data.results[0])
            return {
                json: data.results[0],
                // Localstorage.set("userKey", data.results[0])

            }
        }
        return { json: null }
    }

    // @Action({ commit: '_setJson', rawError: true })
    // async setJson(json: any) {
    //     const { data } = await axios.get("https://randomuser.me/api/")
    //     console.log(data.results[0])
    //     if (data) {
    //         return {
    //             data

    //             // localStorage.setItem('userKey', data.results[0])
    //             // Localstorage.set("userKey", data.results[0])

    //         }
    //     }

    // }

    // @Mutation
    // private _setJson(data: any) {
    //     this.json = data.results[0]
    //     Localstorage.set('userKey', this.json)
    // }




}