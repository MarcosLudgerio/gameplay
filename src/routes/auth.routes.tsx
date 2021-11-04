import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import SignIn from "../screens/SingIn";

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}