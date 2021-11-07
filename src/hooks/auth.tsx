import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { URI_REDIRECT } = process.env;
const { RESPONSE_TYPE } = process.env;

import { api } from '../services/api';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
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
            }
        } catch {
            throw new Error("Não foi possível conectar, tente novamente!");
        } finally {
            setLoading(false);
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