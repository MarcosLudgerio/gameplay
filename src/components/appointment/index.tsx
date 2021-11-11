import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GuildIcon } from "../guildIcon";
import { GuildProps } from "../guild";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import PlayeSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'


export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors;

    return (
        <RectButton  {...rest}>
            <View style={styles.container}>
                <LinearGradient colors={[secondary50, secondary70]} style={styles.guildIconContainer}>
                    <GuildIcon guildIcon={data.guild.icon} guildId={data.guild.id} />
                </LinearGradient>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}> {data.guild.name} </Text>
                        <Text style={styles.category}> {category.title} </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}> {data.date} </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayeSvg fill={owner ? primary : on} />
                            <Text style={[styles.player, { color: owner ? primary : on }]}>{
                                owner ? "Dono da bola" : "Convidado"
                            }</Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}