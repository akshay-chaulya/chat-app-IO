import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 pb-3 flex flex-col overflow-y-auto md:max-w-[450px] w-full">
            <SearchInput />
            <div className="divider px-3" />
            <Conversations />
            <LogoutBtn />
        </div>
    );
};

export default Sidebar;