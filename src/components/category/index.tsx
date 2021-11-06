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
    checked?: boolean;
    hasCheckBox?: boolean;
}

export function Category({ title, icon: Icon, checked = true, hasCheckBox = false, ...rest }: Props) {

    const { secondary40, secondary50, secondary80, secondary85 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient colors={[secondary50, secondary80]} style={styles.container} >
                <LinearGradient
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                >
                    {
                        hasCheckBox && <View style={checked ? styles.checked : styles.unchecked} />
                    }

                    <Icon width={48} height={48} />
                    <Text style={styles.title}> {title} </Text>
                </LinearGradient>
            </LinearGradient >
        </RectButton>
    );
}