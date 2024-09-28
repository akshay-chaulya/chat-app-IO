import { MessageHeader, Messages, MessageInput } from "."

const MessageContainer = () => {

    return (<div className="w-full h-full flex flex-col">
        <MessageHeader />
        <Messages />
        <MessageInput />
    </div>);
};

export default MessageContainer;