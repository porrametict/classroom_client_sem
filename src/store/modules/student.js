const student_api = 'api/v1/student/'
export default {
    namespaced: true,
    state: {
        course_id:null
    },
    getters:{
        course_id: (state) => {
            return state.course_id
        },
    },
    mutations: {
        SET_COURSE_ID: (state, newValue) => {
            state.course_id = newValue
        },
    },
    actions: {
        setCourse_id: ({commit, state}, newValue) => {
            commit('SET_COURSE_ID', newValue)
            console.log(state.course_id,'inAction')
            return state.course_id
        },
        async createStudents(context, params) {
            return await axios.post(`${student_api}`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async getStudents(context, params) {
            console.log(params,'params')
            return await axios.get(`${student_api}`, params = {params})
                .then((response) => {
                    console.log(response.data,'response')
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async getStudent(context, id) {
            return await axios.get(`${student_api}${id}/`, )
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async updateStudent(context, params) {
            return await axios.put(`${student_api}${params.id}/`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async deleteStudent(context, id) {
            return await axios.delete(`${student_api}${id}/`, )
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
    }
}