import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import UserStore from '~/store/userStore';


import createPersistedState from 'vuex-persistedstate'






export interface UserSuperstore {
    userStore: UserStore;
}

export let userStore!: UserStore;

function initialiseStores(store: Store<UserSuperstore>): void {
    userStore = getModule(UserStore, store);
}

const initializer = (store: Store<UserSuperstore>) => initialiseStores(store);
export const plugins = [initializer];


// const store = {
//     state: {
//         version: '1.0.0',
//         // a simple property
//     },
//     modules: {
//         userStore
//     },
//     plugins: [
//         createPersistedState({
//             paths: ['userStore', 'json', 'userStore.<nameOfThePropretyInState>'],
//             getState: (key) => localStorage.getItem(key),
//             setState: (key, state) => localStorage.setItem(key, JSON.stringify(state))
//         })
//     ]
// };

