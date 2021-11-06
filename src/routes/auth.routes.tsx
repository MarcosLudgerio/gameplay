import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentsDetails";
import AppointmentCreate from "../screens/AppointmentsCreate";

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
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppoitmentCreate" component={AppointmentCreate} />
        </Navigator>
    );
}