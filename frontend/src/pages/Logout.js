import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const logoutFromGoogle = () => {
        signOut(auth).then(() => {
            localStorage.setItem("isAuth", false);
            logout();
            navigate("/login");
        });
    };
    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logoutFromGoogle}>ログアウト</button>
        </div>
    );
};
