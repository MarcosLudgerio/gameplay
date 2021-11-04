import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={30} color={heading} />
            </BorderlessButton>
            <Text style={styles.tittle} > {tittle} </Text>
            {
                action &&
                <View>{action}</View>
            }
        </LinearGradient>
    );
}