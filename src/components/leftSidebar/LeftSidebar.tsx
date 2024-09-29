import { SearchInput, LogoutBtn, Users } from "."

const LeftSidebar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`border-r border-slate-500 p-4 pb-3 flex flex-col overflow-y-auto w-full transition-opacity ease-in-out ${!isOpen ? "max-md:opacity-0" : ""}`}>
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