import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected"

const MessageContainer = () => {
    const selected = true;

    return <div className="md:block hidden h-ful w-full">
        {
            !selected
                ? <NoChatSelected />
                : <div className="w-full h-full flex flex-col">
                    <MessageHeader />
                    <Messages />
                    <MessageInput />
                </div>
        }
    </div>

};

export default MessageContainer;