import axios from 'axios';

const axiosInstance = axios.create({
     baseURL: (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, ""),
     withCredentials: false,
});

// We will set this token from a component that has access to Clerk's useAuth
let authToken = null;

export const setAuthToken = (token) => {
     authToken = token;
};

axiosInstance.interceptors.request.use(
     async (config) => {
          if (authToken) {
               console.log("📤 Interceptor: Attaching Clerk Auth Header");
               config.headers.Authorization = `Bearer ${authToken}`;
               config.headers["Clerk-Auth-Token"] = authToken; // Added for extra redundancy with some Clerk middlewares
          } else {
               console.log("📤 Interceptor: NO AUTH TOKEN PRESENT");
          }
          return config;
     },
     (error) => Promise.reject(error)
);

export default axiosInstance;