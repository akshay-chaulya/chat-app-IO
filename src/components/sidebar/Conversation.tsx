import { LogoWithName } from "../";

interface ConversationProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    userDetails: object;
}

const Conversation: React.FC<ConversationProps> = ({ onClick, userDetails }) => {
    return (
        <>
            <div onClick={onClick} className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="flex flex-1 justify-between">
                    <LogoWithName
                        logo="#"
                        name="Akshay chaulya"
                    />
                    <span className="text-xl">😡</span>
                </div>
            </div>

            <div className="divider my-0 py-0 h1" />
        </>
    );
};

export default Conversation;