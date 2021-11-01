import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from './styles';

type Props = RectButtonProps & {
    title: String;
    icon: React.FC<SvgProps>;
    checked?: boolean
}


export function Category({ title, icon: Icon, checked = true, ...rest }: Props) {

    const { secondary50, secondary70 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient colors={[secondary50, secondary70]} style={styles.container} >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.unchecked} />
                    <Icon width={48} height={48} />
                    <Text style={styles.title}> {title} </Text>
                </View>
            </LinearGradient >
        </RectButton>
    );
}