import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from 'react-native';

import { styles } from "./style";
import discord from '../../assets/discord.png';

type props = RectButtonProps & {
    title: string
}

export function ButtonIcon({ title, ...rest }: props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={discord} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}
