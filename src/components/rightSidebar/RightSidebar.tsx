import { Outlet } from "react-router-dom";

const RightSidebar = () => {
    return (
        <div className="relative md:block hidden h-ful w-full">
            <Outlet />
        </div>
    );
};

export default RightSidebar;