import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const expireDate = new Date(localStorage.getItem("expire"));
    const currentDate = new Date();

    useEffect(() => {
        if(localStorage.getItem("token") && expireDate.getTime() > currentDate.getTime()) {
            const login = localStorage.getItem("login");
            const pwd = localStorage.getItem("pwd");
            const token = localStorage.getItem("token");
            setAuth({login, pwd, token});
        } else if (localStorage.getItem("token") && expireDate.getTime() <= currentDate.getTime()) {
            localStorage.removeItem("login");
            localStorage.removeItem("pwd");
            localStorage.removeItem("token");
        }
    }, []);

    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;