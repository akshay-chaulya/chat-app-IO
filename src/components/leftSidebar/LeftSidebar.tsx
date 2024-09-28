import { SearchInput, LogoutBtn, Users } from "."

const LeftSidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 pb-3 flex flex-col overflow-y-auto md:max-w-[450px] w-full">
            <SearchInput />
            <div className="divider px-3" />
            <div className="scroll-bar-hidden py-2 flex flex-col overflow-auto">
                <Users />
            </div>
            <LogoutBtn />
        </div>
    );
};

export default LeftSidebar;