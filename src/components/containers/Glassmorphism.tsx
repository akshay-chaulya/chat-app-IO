import { ReactNode } from "react";

interface GlassmorphismProps {
    children: ReactNode;
    className: string;
}

const Glassmorphism: React.FC<GlassmorphismProps> = ({ children, className }) => {
    return (
        <div className={`rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ${className} `}>
            {children}
        </div>
    );
};

export default Glassmorphism;