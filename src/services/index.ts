import axios from "axios";
import { apiUrl } from "../config";

export const authApi = axios.create({
    baseURL: `${apiUrl}/auth`,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})