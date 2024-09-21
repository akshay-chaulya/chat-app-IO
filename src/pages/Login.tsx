import { AuthAlternate, BtnPrimary, InputField, Form, FormHeading } from "../components";

const Login = () => {
  return (
    <Form>
      <FormHeading text="Login" />

      <InputField placeholder="Enter your username" labelText="Username" />
      <InputField placeholder="Enter your password" labelText="Password" />

      <AuthAlternate text="Don't have an account?" to="/signup" />

      <BtnPrimary text="Login" />
    </Form>
  );
};

export default Login;