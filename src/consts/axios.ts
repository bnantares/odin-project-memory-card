import axios from "axios";

export const $base_http = axios.create({
    baseURL: import.meta.env.POKE_API_BASE_URL
})