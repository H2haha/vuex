import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    strict: true, //严格模式 只能在mutation修改状态  
    state: {
        arr: []
    },
    mutations: {
        setArr(state, arg) {
            state.arr = arg;
        }
    },
    actions: {
        async loadArr({ commit }, arg) {
            let arr = await (await fetch('http://localhost:8081/a')).json();
            commit('setArr', arr);
        }
    },
    getters: {
        arr(state) {
            if (state.arr.length == 0) {
                store.dispatch('loadArr');
            }
            return state.arr;

        }
    }
});


export default store;