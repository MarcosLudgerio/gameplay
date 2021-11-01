import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { Background } from "../components/background";

import AuthRoutes from "./auth.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    );


}