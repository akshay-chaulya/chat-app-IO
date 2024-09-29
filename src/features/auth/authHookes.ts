import { authApi } from "../../services"
import { useMutation, useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { errorHandler } from "../../utils"
import { LoginDataType, SignUpDataType } from "../../types/dataTypes"
import { logout, setUser } from "./authSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export const useCheckAuth = () => {
    const dispatch = useDispatch();

    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: ["authUser"],
        queryFn: async () => {
            // await new Promise(r => setTimeout(r, 6000))
            const { data } = await authApi.get("/me");

            return data;
        },
    })

    useEffect(() => {
        if (isSuccess && data?.success) {
            dispatch(setUser(data.data))
        }
    }, [data, error, isSuccess, dispatch])

    return { isLoading }
}

export const useSignup = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: async (credentials: SignUpDataType) => {
            const { data } = await authApi.post("/signup", { ...credentials });
            return data;
        },
        onError: (error) => {
            errorHandler(error);
        },
        onSuccess: ({ message, data }) => {
            dispatch(setUser(data))
            toast.success(message);
        }
    })
}

export const useLogin = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: async (credentials: LoginDataType) => {
            const { data } = await authApi.post("/login", { ...credentials },)
            console.log(data)
            return data;
        },
        onSuccess({ message, data }) {
            dispatch(setUser(data))
            toast.success(message);
        },
        onError(error) {
            errorHandler(error);
        }
    })
}

export const useLogout = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: async () => {
            const { data } = await authApi.post("/logout")
            return data;
        },
        onSuccess: ({ message }) => {
            dispatch(logout());
            toast.success(message);
        },
        onError: (error) => {
            errorHandler(error);
        }
    })
}