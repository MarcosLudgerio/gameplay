import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from "../screens/SingIn";

import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";

export default function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user.id ? <AuthRoutes /> : <SignIn />}
        </NavigationContainer>
    );


}