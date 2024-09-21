import Conversation from "./Conversation";

const Conversations = () => {
    return (
        <div className="scroll-bar-hidden py-2 flex flex-col overflow-auto">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    );
};

export default Conversations;