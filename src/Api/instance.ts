import axios from "axios";
import { API_BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically if present
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("admin_token") || sessionStorage.getItem("admin_token");
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (err) {
      // ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
