import React from "react";
import { View } from "react-native";

import Profile from "../../components/profile";
import { Background } from "../../components/background";

import { styles } from "./styles";


export default function Home() {
    return (
        <Background>
            <View style={styles.container}>
                <Profile />
            </View>
        </Background>
    );
}