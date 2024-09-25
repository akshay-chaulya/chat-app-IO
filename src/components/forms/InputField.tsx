import { forwardRef, useId } from "react";
import { InputFieldProps } from "../../types/componentTypes";
import InputErrorMsg from "./InputErrorMsg";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ type = "text", label, className, error, ...props }, ref) => {
        const id = useId();

        return (
            <div className="mb-1">
                <label htmlFor={id} className="label p-2">
                    <span className="text-base label-text">{label}</span>
                </label>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    className={`w-full input input-bordered h-10 ${error ? 'input-error' : ''} ${className}`}
                    {...props} // Spread any other props
                />
                <InputErrorMsg error={error} />
            </div>
        );
    }
);

export default InputField; // Exporting directly
