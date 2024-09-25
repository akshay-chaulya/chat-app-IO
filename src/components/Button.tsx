import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", ...props }) => {
    return (
        <div>
            <button {...props} className={`btn btn-block btn-sm mt-2 ${className}`}>{text}</button>
        </div>
    );
};

export default Button;