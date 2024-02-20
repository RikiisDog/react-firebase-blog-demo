import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { isAuth: true };
        case "logout":
            return { isAuth: false };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    // localStorageからisAuthの値を取得し、論理値に変換する
    // キーが存在しない場合はnullが返るので、その場合はfalseを使用する
    const initialState = {
        isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    };
    const [auth, dispatch] = useReducer(AuthReducer, initialState);
    return <AuthContext.Provider value={{ auth, dispatch }}>{children}</AuthContext.Provider>;
};
