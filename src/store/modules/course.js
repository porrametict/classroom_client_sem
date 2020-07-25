const course_api = 'api/v1/course/'
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async createCourses(context, params) {
            return await axios.post(`${course_api}`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async getCourses(context, params) {
            return await axios.get(`${course_api}`, params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async getCourse(context, id) {
            return await axios.get(`${course_api}${id}/`,)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async updateCourse(context, params) {
            return await axios.put(`${course_api}${params.id}/`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async deleteCourse(context, id) {
            return await axios.delete(`${course_api}${id}/`,)
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