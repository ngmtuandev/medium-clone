import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://ulitmate-blog-app-production.up.railway.app/api'
})

export default axiosClient