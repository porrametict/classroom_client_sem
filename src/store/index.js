import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import success from "./modules/success";
import spinner from "./modules/spinner";
import error from "./modules/error";
import student from "./modules/student";
import course from "./modules/course";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: user,
        student: student,
        course: course,

        spinner: spinner,
        success: success,
        error: error,
    }
})
