import React from "react";
import { View, Text } from "react-native";
import ButtonAdd from "../addButton";

import Avatar from "../avatar";

import { styles } from "./styles";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/marcosludgerio.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}> Olá, </Text>
                    <Text style={styles.username}> Marcos </Text>
                </View>
                <Text style={styles.message}> Hoje é dia de estresse! </Text>
            </View>
        </View>
    );
}