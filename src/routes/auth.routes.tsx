import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import SignIn from "../screens/SingIn";

const Stack = createNativeStackNavigator();


export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}