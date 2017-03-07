import Vue from 'vue';
import Vuex from 'vuex';
import finance from './modules/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      index
    },
    strict: process.env.NODE_ENV !== 'production'

});


