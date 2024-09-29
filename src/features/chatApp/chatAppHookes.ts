import { useMutation, useQuery } from "@tanstack/react-query"
import { messageApi, usersApi } from "../../services"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setError, setUsers, setMessages, addNewMessage } from "./chatAppSlice";

export const useSearchUsers = (query: string) => {
    const dispatch = useDispatch();

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ["users", query],
        queryFn: async () => {
            const { data } = await usersApi.get(`/search?query=${query}`);
            // console.log(data)
            return data;
        },
        enabled: query?.length >= 3
    })

    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading(true));
        } else if (!isLoading) {
            dispatch(setLoading(false));
        }
        if (error) {
            dispatch(setError("User not found"))
        }
        if (isSuccess && data.success) {
            dispatch(setUsers(data.data));
        }
    }, [data, isSuccess, error, isLoading, dispatch])

    return { isLoading }
}

export const useGetAllUsers = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await usersApi.get("/all-users");
            return data;
        },
    })

    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading(true));
        } else {
            dispatch(setLoading(false))
        }

        if (error) {
            dispatch(setError("User not found"));
        }

        if (isSuccess && data.success) {
            dispatch(setUsers(data.data));
        }

    }, [data, isLoading, error, isSuccess, dispatch])
}

export const useGetAllMessage = (friendId: string) => {
    const dispatch = useDispatch();
    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ["messages", friendId],
        queryFn: async () => {
            dispatch(setMessages([]));
            const { data } = await messageApi.get(`/${friendId}`);
            return data;
        },
        refetchOnWindowFocus: true,
    });

    useEffect(() => {
        if (isSuccess && data.success) {
            dispatch(setMessages(data.data));
        }
    }, [data, dispatch, isSuccess])

    return { data, isLoading, isSuccess, error }
}

export const useSendMessage = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: async ({ friendsId, text }: { friendsId: string, text: string }) => {
            const { data } = await messageApi.post(`/send/${friendsId}`, { text });
            return data;
        },
        onSuccess: (data) => {
            dispatch(addNewMessage(data.data));
        }
    });
}