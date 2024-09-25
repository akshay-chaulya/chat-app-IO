import { FormContainer, InputField, AuthAlternate, FormHeading, GenderSection } from "./";
import { Button } from "../index"
import { useForm, SubmitHandler } from "react-hook-form"
import { SignUpDataType } from "../../types/dataTypes";
import { useSignup } from "../../features/auth/authHookes";

const SignUpForm = () => {
    const { mutate: signUp, isPending } = useSignup();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<SignUpDataType>();

    const handleSignUp: SubmitHandler<SignUpDataType> = (data) => signUp(data);

    return (
        <FormContainer onSubmit={handleSubmit(handleSignUp)}>
            <FormHeading text="Sign Up" />

            <InputField
                placeholder="Enter your full name"
                label="Full Name"
                error={errors?.fullName?.message}
                {...register("fullName", { required: "Full name is required" })}
            />
            <InputField
                placeholder="Enter your email"
                label="Email"
                error={errors?.email?.message}
                {...register("email", {
                    required: "Email is required", pattern: {
                        value: /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email address must be a valid address",
                    }
                })}
            />
            <InputField
                placeholder="Enter your password"
                label="Password"
                error={errors?.password?.message}
                {...register("password", { required: "Password is required" })}
            />
            <InputField
                placeholder="Enter your confirm password"
                label="Confirm Password"
                error={errors?.confirmPassword?.message}
                {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                    }
                })}
            />

            <GenderSection
                error={errors?.gender?.message}
                register={register("gender", { required: "Gender is required" })} // Register gender input
            />


            <AuthAlternate text="Already have an account?" to="/login" />

            <Button disabled={isPending} text={isPending ? "Loading..." : "SignUp"} />
        </FormContainer>
    );
};

export default SignUpForm;