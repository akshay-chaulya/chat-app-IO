interface FormHeadingProps {
    text: string;
}

const FormHeading:React.FC<FormHeadingProps> = ({text}) => {
    return (
        <h1 className="text-3xl font-semibold text-center text-gray-300">{text}
            <span className="text-blue-500 font-mono"> ChatAppIO</span>
        </h1>
    );
};

export default FormHeading;