import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
    id: String;
    username: String;
    firstName: String;
    avatar: String;
    email: String;
    token: String;
}

type AuthContextData = {
    user: User;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}