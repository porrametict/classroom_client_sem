export default {
    namespaced: true,
    actions: {
        async getListStudent(context, params = null) {
            return await axios.get('/api/v1/student/index', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.error(error)
                    return null
                })
        },
        async deleteStudent(context, id) {
            return await axios.delete(`/api/v1/student/index/${id}/`)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.error(error)
                    return null
                })
        },
    }
}