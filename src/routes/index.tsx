import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from "../screens/SingIn";

import { useAuth } from "../hooks/auth";
import AppRoutes from "./app.routes";

export default function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user.id ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    );


}