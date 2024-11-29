import axios from "axios";
import { notification } from "antd";

const api = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      notification.warning({
        message: "Authentication Required",
        description:
          "Oops! It seems like we don`t have a token to authenticate your request. Please provide your token to proceed.",
        duration: 3
      });

      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      }, 3000);
    }

    return Promise.reject(error);
  }
);

export default api;
