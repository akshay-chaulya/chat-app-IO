import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/auth/authSelectors";

const PublicRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
