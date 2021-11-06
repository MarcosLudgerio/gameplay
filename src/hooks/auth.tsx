import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';

import { SCOPE, CLIENT_ID, CDN_IMAGE, URI_REDIRECT, RESPONSE_TYPE } from '../configs/authDiscord';
import { api } from '../services/api';

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
    signIn(): Promise<void>;
    loading: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {

        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${URI_REDIRECT}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        try {
            setLoading(true);

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if (type === 'success') {
                const userInfo = await api.get('/users/@me', { headers: { authorization: `Bearer ${params.access_token}` } });
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                setUser({ ...userInfo.data, firstName, token: params.access_token, });
                setLoading(false);
            }
        } catch {
            throw new Error("Verifique os dados!")
        }
    }

    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>
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