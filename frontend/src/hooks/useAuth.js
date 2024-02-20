import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const { auth, dispatch } = useContext(AuthContext);
    const login = () => {
        dispatch({ type: "login" });
    };
    const logout = () => {
        dispatch({ type: "logout" });
    };
    return { auth, login, logout };
};
