import { FC } from "react";
import { getDate } from "../../../utils";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../../features/auth/authSelectors";

interface MessageProps {
    message: Message;
}

const Message: FC<MessageProps> = ({ message }) => {
    const authUser = useSelector(selectAuthUser);
    const isMaine = authUser?.id === message.senderId
    return (
        <div className={`chat ${isMaine ? "chat-end" : "chat-start"}`}>

            <div className={`chat-bubble text-white ${isMaine ? "bg-blue-500" : ""}`}>{message.text}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{getDate(message.createdAt)}</div>
        </div>
    );
};

export default Message;