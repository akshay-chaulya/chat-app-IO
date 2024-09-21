import { AuthAlternate, BtnPrimary, InputField, Form, FormHeading, GenderCheckbox } from "../components";

const SignUp = () => {
    return (
        <Form>
            <FormHeading text="Sign Up" />

            <InputField placeholder="Enter your full name" labelText="Full Name" />
            <InputField placeholder="Enter your username" labelText="Username" />
            <InputField placeholder="Enter your password" labelText="Password" />
            <InputField placeholder="Enter your confirm password" labelText="Confirm Password" />

            <GenderCheckbox />

            <AuthAlternate text="Already have an account?" to="/login" />

            <BtnPrimary text="SignUp" />
        </Form>
    );
};

export default SignUp;