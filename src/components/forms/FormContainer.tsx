import { MainContainer, Glassmorphism } from "../";
import { FormProps } from "../../types/componentTypes";


const FormContainer: React.FC<FormProps> = ({ children, onSubmit }) => {
    return (
        <MainContainer>
            <Glassmorphism className="p-6 shadow-md min-w-96 ">
                <form onSubmit={onSubmit} className="text-gray-200 ">
                    {children}
                </form>
            </Glassmorphism>
        </MainContainer>
    );
};

export default FormContainer;