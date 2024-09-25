import { ComponentProps } from "../../types/componentTypes";

const MainContainer: React.FC<ComponentProps> = ({ children, className }) => {
    return (
        <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 ${className}`}>
            {children}
        </div>
    );
};

export default MainContainer;