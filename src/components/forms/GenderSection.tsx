import InputErrorMsg from "./InputErrorMsg";
import { UseFormRegisterReturn } from "react-hook-form";

const GenderOptions = ["male", "female", "other"];

interface GenderSectionProps {
    error?: string;
    register: UseFormRegisterReturn; // Expecting register from react-hook-form
}

const GenderSection = ({ error, register }: GenderSectionProps) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <label className="label p-2">
                    <span className="text-base label-text">Gender</span>
                </label>
                {GenderOptions.map((value) => (
                    <div className="form-control" key={value}>
                        <label htmlFor={value} className="label gap-2 cursor-pointer">
                            <span className="label-text">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                            <input
                                id={value}
                                {...register} // Register the input with react-hook-form
                                value={value} // Set the value for each radio input
                                type="radio"
                                className="radio-primary border-slate-900 cursor-pointer"
                            />
                        </label>
                    </div>
                ))}
            </div>
            <InputErrorMsg error={error} />
        </>
    );
};

export default GenderSection;
