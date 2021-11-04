import React from "react";
import { View } from "react-native";

import { Background } from "../../components/background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export default function AppointmentDetails() {

    return (
        <Background>
            <View style={styles.header}>
                <Header
                    tittle="Detalhes"
                />
            </View>
        </Background>
    );
}