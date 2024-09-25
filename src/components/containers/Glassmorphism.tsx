import { ComponentProps } from "../../types/componentTypes";


const Glassmorphism: React.FC<ComponentProps> = ({ children, className }) => {
    return (
        <div className={`rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ${className} `}>
            {children}
        </div>
    );
};

export default Glassmorphism;