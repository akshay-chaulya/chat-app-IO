import { Link } from "react-router-dom";
import { AuthAlternateProps } from "../../types/componentTypes";


const AuthAlternate: React.FC<AuthAlternateProps> = ({ text, to }) => {
    let linkText = to.replace("/", "");
    linkText = linkText.slice(0, 1).toUpperCase() + linkText.slice(1);

    return (
        <p className="text-sm p-2 inline-block">
            <span>
                {text}
            </span>
            <Link className="hover:underline hover:text-blue-600 text-blue-500" to={to}> {linkText}</Link>
        </p>
    );
};

export default AuthAlternate;