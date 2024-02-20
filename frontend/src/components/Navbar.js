import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilePen, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
    const { auth } = useAuth();

    return (
        <nav>
            {auth.isAuth ? (
                <>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        ホーム
                    </Link>
                    <Link to="/createpost">
                        <FontAwesomeIcon icon={faFilePen} />
                        記事投稿
                    </Link>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        ログアウト
                    </Link>
                </>
            ) : (
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    ログイン
                </Link>
            )}
        </nav>
    );
};
