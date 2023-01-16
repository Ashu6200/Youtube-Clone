import { createContext, useState } from "react";


export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    return (
        <AuthContext.Provider value={children}>
            {children}
        </AuthContext.Provider>
    );
}