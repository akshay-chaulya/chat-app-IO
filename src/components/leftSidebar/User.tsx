import { useNavigate } from "react-router-dom";
import { LogoWithName } from "..";
import { UserDatayType } from "../../types/dataTypes";
import { getLogo } from "../../utils";

interface ConversationProps {
    // onClick: React.MouseEventHandler<HTMLDivElement>;
    userDetails: UserDatayType;
    to: string;
}

const Conversation: React.FC<ConversationProps> = ({ userDetails, to }) => {
    const navigate = useNavigate();

    return (
        <>
            <div onClick={() => navigate(to)} className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="flex flex-1 justify-between">
                    <LogoWithName
                        logo={getLogo(userDetails.profilePic)}
                        name={userDetails.fullName}
                    />
                </div>
            </div>

            <div className="divider my-0 py-0 h1" />
        </>
    );
};

export default Conversation;