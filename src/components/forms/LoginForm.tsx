import { FormContainer, InputField, AuthAlternate, FormHeading } from "./";
import { Button } from "../index"
import { useLogin } from "../../features/auth/authHookes";
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginDataType } from "../../types/dataTypes";



const LoginForm = () => {
    const { mutate: login, isPending } = useLogin();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginDataType>();

    const handleLogin: SubmitHandler<LoginDataType> = (data) => login(data);
    return (
        <FormContainer onSubmit={handleSubmit(handleLogin)}>
            <FormHeading text="Login" />

            <InputField
                label="Email"
                placeholder="Enter your email"
                error={errors?.email?.message}

                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, // Regex for email validation
                        message: "Email address must be a valid address", // Error message when pattern fails
                    }
                })}
            />
            <InputField
                placeholder="Enter your password"
                label="Password"
                type="password"
                error={errors?.password?.message}
                {...register("password", {
                    required: "Password is required", minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                    }
                })}
            />

            <AuthAlternate text="Don't have an account?" to="/signup" />

            <Button disabled={isPending} text={isPending ? "Loading..." : "Login"} />
        </FormContainer>
    );
};

export default LoginForm;