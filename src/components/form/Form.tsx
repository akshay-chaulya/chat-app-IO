import { ReactNode } from "react";
import Glassmorphism from "../containers/Glassmorphism";

interface FormProps {
    children: ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <Glassmorphism className="w-full p-6 shadow-md">
                <form className="text-gray-200">
                    {children}
                </form>
            </Glassmorphism>
        </div>
    );
};

export default Form;