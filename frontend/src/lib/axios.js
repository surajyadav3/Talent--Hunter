import axios from 'axios';

const axiosInstance = axios.create({
     baseURL: (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, ""),
     withCredentials: true,
});

// We will set this token from a component that has access to Clerk's useAuth
let authToken = null;

export const setAuthToken = (token) => {
     authToken = token;
};

axiosInstance.interceptors.request.use(
     async (config) => {
          if (authToken) {
               config.headers.Authorization = `Bearer ${authToken}`;
          }
          return config;
     },
     (error) => Promise.reject(error)
);

export default axiosInstance;