import { useSelector } from "react-redux";
import { BackBtn } from "../";
import LogoWithName from "../../LogoWithName";
import { useParams } from "react-router-dom";
import { selectOnlineUsersIds, selectUsers } from "../../../features/chatApp/chatAppSelectors";
import { getLogo } from "../../../utils";

const MessageHeader = () => {
    const onlineUsersId = useSelector(selectOnlineUsersIds)
    const { id } = useParams()
    const userData = useSelector(selectUsers).find(user => user.id === id);

    if (!userData) {
        return null
    }

    const userStatus = onlineUsersId.includes(userData?.id) ? "online" : "offline"



    return (
        <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
            <BackBtn />
            <LogoWithName userStatus={userStatus} name={userData?.fullName} logo={getLogo(userData.profilePic)} />
        </div>
    );
};

export default MessageHeader;