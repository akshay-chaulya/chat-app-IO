import { useId } from "react"

interface InputFieldProps {
    inputType?: string;
    placeholder: string;
    labelText: string;
}

const InputField: React.FC<InputFieldProps> = ({ inputType = "text", placeholder, labelText }) => {
    const id = useId();

    return (
        <div>
            <label htmlFor={id} className="label p-2">
                <span className="text-base lable-text">{labelText}</span>
            </label>
            <input id={id} type={inputType} placeholder={placeholder} className="w-full input input-bordered h-10" />
        </div>
    );
};

export default InputField;