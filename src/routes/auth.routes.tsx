import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import SignIn from "../screens/SingIn";
import AppointmentDetails from "../screens/AppointmentsDetails";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
        </Navigator>
    );
}