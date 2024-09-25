import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/auth/authSelector";

const PublicRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    console.log(isAuthenticated)

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
