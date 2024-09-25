import { useSelector } from "react-redux";
import { selectAuthUser } from "../../features/auth/authSelector";

const MessageHeader = () => {
    const userData = useSelector(selectAuthUser)
    return (
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">{userData?.fullName}</span>
        </div>
    );
};

export default MessageHeader;