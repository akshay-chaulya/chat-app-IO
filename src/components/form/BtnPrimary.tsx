interface BtnPrimaryProps {
    text: string;
    className?: string;
}

const BtnPrimary: React.FC<BtnPrimaryProps> = ({ text, className = "" }) => {
    return (
        <div>
            <button className={`btn btn-block btn-sm mt-2 ${className}`}>{text}</button>
        </div>
    );
};

export default BtnPrimary;