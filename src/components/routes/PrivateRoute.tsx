import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/auth/authSelector";

const PrivateRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // If not authenticated, redirect to login
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;