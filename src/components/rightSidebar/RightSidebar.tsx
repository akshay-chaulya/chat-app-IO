import { Outlet } from "react-router-dom";

const RightSidebar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`h-full w-full overflow-auto md:relative md:top-auto md:bottom-auto absolute ${isOpen ? "top-0 bottom-0" : "bottom-[100%]"} `}>
            <Outlet />
        </div>
    );
};

export default RightSidebar;