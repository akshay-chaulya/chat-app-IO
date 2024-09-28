import { useParams } from "react-router-dom";
import { Message } from ".";
import { useGetAllMessage } from "../../../features/chatApp/chatAppHookes";
import Loader from "../../Loader";
import { useSelector } from "react-redux";
import { selectMessages } from "../../../features/chatApp/chatAppSelectors";
import { useChatScroll } from "../../../hooks";
import { LegacyRef } from "react";

const Messages = () => {
    const friendsId = useParams().id as string;

    const { isLoading } = useGetAllMessage(friendsId)
    const allMessages = useSelector(selectMessages)

    const ref = useChatScroll(allMessages) as LegacyRef<HTMLDivElement>;


    return (
        <div ref={ref} className="px-4 flex-1 overflow-auto flex flex-col">
            {!isLoading && !allMessages.length && <div className="self-center my-auto">Send a message to start chat</div>}

            {allMessages.length > 0 && allMessages.map(message =>
                <Message key={message.id} message={message} />
            )}

            {isLoading && <Loader />}
        </div>
    );
};

export default Messages;