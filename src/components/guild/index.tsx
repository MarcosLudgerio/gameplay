import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from "../guildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: string;
    name: string;
    icon: null | string;
    owner: boolean;
}


type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}>
            <GuildIcon guildIcon={data.icon} guildId={data.id} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.type}>{data.owner ? "Dono da bola" : "Biqueiro"}</Text>
                </View>
            </View>
            <Feather name="chevron-right" color={theme.colors.heading} size={24} />
        </TouchableOpacity>
    );
}