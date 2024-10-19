import axios from "axios";
let url = window.location.href;

const axiosInstance = axios.create({
  baseURL: "YOUR_API_BASE_URL",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user_token = "";
    if (user_token) {
      config.headers.auth = user_token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 ||
        error.response.data.message === "Unauthorized request" ||
        error.response.data.message === "Token expired")
    ) {
      window.location.href = "/";
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
