import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Prpos = {
    tittle: string;
    action?: ReactNode;
}

export function Header({ tittle, action }: Prpos) {

    const { secondary100, secondary40, heading } = theme.colors;

    return (
        <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
            <BorderlessButton>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>
            <Text style={styles.tittle} > {tittle} </Text>
            {
                action &&
                <View>{action}</View>
            }
        </LinearGradient>
    );
}