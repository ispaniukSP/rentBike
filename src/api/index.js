
import axios from "axios"
import tokenService from './tokenService';

const instance = axios.create({
    baseURL: `http://localhost:3002`,
    "Access-Control-Expose-Headers": "Content-Encoding",
})

instance.interceptors.request.use(
    (config) => {
        const token = tokenService.getAccessToken();
        const refreshToken = tokenService.getRefreshToken();
        if (token) {
            config.headers['Authorization'] = token;
            config.headers['x-header'] = refreshToken;
        }
        return config;
    },
)
instance.interceptors.response.use(
    (response) => {
        console.log(response)
    return response
},
async function(error) {
    if(error.response.status === 401){
        localStorage.clear();
        window.location.reload();
    }
}
)

export default instance