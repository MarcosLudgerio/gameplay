import React from "react";
import { View } from "react-native";

import Profile from "../../components/profile";
import { Background } from "../../components/background";

import { styles } from "./styles";
import ButtonAdd from "../../components/addButton";


export default function Home() {
    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>
            </View>
        </Background>
    );
}