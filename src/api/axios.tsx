import axios from "axios"

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

api.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest = error.config

        // accessToken 만료
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes("/user/refresh")
        ) {

            originalRequest._retry = true

            try {

                await api.post("/user/refresh")

                return api(originalRequest)

            } catch {

                return Promise.reject(error);

            }

        }

        return Promise.reject(error)

    }
)