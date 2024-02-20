import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem("isAuth", true);
            login();
            navigate("/");
        });
    };
    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginWithGoogle}>Googleでログイン</button>
        </div>
    );
};
