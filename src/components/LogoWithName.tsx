import { FC } from "react";

interface LogoWithNameProps {
    name: string;
    logo: string;
    className?: string;
    logoClass?: string;
}

const LogoWithName: FC<LogoWithNameProps> = ({ name, logo, className, logoClass }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className={`w-12 rounded-full ${logoClass}`}>
                <img src={logo} alt="user avatar" />
            </div>
            <p className="font-bold text-gray-200">{name}</p>
        </div>
    );
};

export default LogoWithName;