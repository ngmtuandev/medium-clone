import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ulitmate-blog-app-production.up.railway.app/api",
});

axiosClient.interceptors.request.use(
  function (config) {
    const tokenUser = localStorage.getItem("token-user-medium");
    if (tokenUser) {
      config.headers.Authorization = `bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosClient;
