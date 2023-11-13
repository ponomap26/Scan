import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/AuthProvider";

const RequireNotAuth = ({children}) => {
    const location = useLocation();
    const { auth } = useAuth();
    const login = auth.login;

    if (login) {
        return <Navigate to="/search" state={{from: location}} />
    }

    return children;
}

export default RequireNotAuth;