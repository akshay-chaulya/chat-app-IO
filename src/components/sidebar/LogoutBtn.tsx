import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../features/auth/authHookes";

const LogoutBtn = () => {
    const { mutate: logout, isPending } = useLogout();

    if (isPending) return <p>Processing...</p>

    return (
        <div onClick={() => logout()} className="mt-auto py-1">
            <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
        </div>
    );
};

export default LogoutBtn;