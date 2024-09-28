import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackBtn: FC<{ className?: string }> = ({ className }) => {
    const navigate = useNavigate();

    return (
        <FaArrowLeft onClick={() => navigate("/")} className={`cursor-pointer text-xl text-gray-400 hover:text-gray-300 ${className}`} />
    );
};

export default BackBtn;