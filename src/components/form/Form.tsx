import { ReactNode } from "react";

interface FormProps {
    children: ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <form className="text-gray-200">
                    {children}
                </form>
            </div>
        </div>
    );
};

export default Form;