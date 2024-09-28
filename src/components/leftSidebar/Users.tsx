import { useSelector } from "react-redux";
import { selectChatAppState } from "../../features/chatApp/chatAppSelectors";
import { User } from ".";
import Loader from "../Loader";

const Users = () => {
    const { isLoading, users: searchUsers, error } = useSelector(selectChatAppState);

    if (isLoading) return <Loader />
    if (error) return <h1 className="self-center">{error}</h1>
    return (
        <>
            {searchUsers.map(user => <User key={user.id} userDetails={user} to={`send-message/${user.id}`} />)}
        </>
    );
};

export default Users;