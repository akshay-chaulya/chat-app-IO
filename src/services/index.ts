import axios from "axios";
import { apiUrl } from "../config";

const headers = { 'Content-Type': 'application/json' }

export const authApi = axios.create({
    baseURL: `${apiUrl}/auth`,
    headers: headers,
    withCredentials: true
})

export const usersApi = axios.create({
    baseURL: `${apiUrl}/users`,
    headers: headers,
    withCredentials: true
})

export const messageApi = axios.create({
    baseURL: `${apiUrl}/messages`,
    headers: headers,
    withCredentials: true
})