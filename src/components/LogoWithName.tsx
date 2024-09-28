import { FC } from "react";

interface LogoWithNameProps {
    name: string;
    logo: string;
    className?: string;
    logoClass?: string;
    userStatus?: "online" | "offline"
}


const LogoWithName: FC<LogoWithNameProps> = ({ name, logo, className, logoClass, userStatus }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className={`w-12 rounded-full overflow-hidden ${logoClass}`}>
                <img src={logo} alt="user avatar" />
            </div>
            <div>
                <p className="font-bold text-gray-200 ">{name}</p>
                <p>{userStatus ? userStatus : ""}</p>
            </div>
        </div>
    );
};

export default LogoWithName;