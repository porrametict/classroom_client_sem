const course_api = 'api/v1/course/'
const course_api_no_page = 'api/v1/course-no-paginate/'
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
                    context.dispatch("error/setError", error.response.data, {root: true});
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
        async getCoursesNoPaginate(context, params) {
            return await axios.get(`${course_api_no_page}`, params = {params})
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