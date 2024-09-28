import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../features/auth/authSelectors";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { apiBaseUrl } from "../config";
import { addNewMessage, setOnlieUsers } from "../features/chatApp/chatAppSlice";

const useSocket = () => {
    const dispatch = useDispatch();
    const authUser = useSelector(selectAuthUser);
    const socketRef = useRef<Socket | null>(null); // Create a ref to store the socket instance

    useEffect(() => {
        if (authUser) {
            // Initialize socket connection only if it doesn't exist
            if (!socketRef.current) {
                socketRef.current = io(apiBaseUrl, {
                    query: {
                        userId: authUser.id, // Pass the user's ID for identifying the connection
                    },
                });

                // Handle "getOnlineUsers" event
                socketRef.current.on("getOnlineUsers", (users: string[]) => {
                    dispatch(setOnlieUsers(users)); // Update online users in the Redux store
                });

                // Handle "newMessage" event
                socketRef.current.on("newMessage", (newMessage: Message) => {
                    console.log("New message received: ", newMessage);
                    dispatch(addNewMessage(newMessage)); // Add the new message to the Redux store
                });
            }
        }

        // Cleanup socket connection on component unmount
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect(); // Disconnect the socket when component unmounts or authUser changes
                socketRef.current = null; // Reset the ref
            }
        };
    }, [authUser, dispatch]); // Re-run effect if authUser or dispatch changes
};

export default useSocket;
