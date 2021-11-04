import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from "react-native";

import { GuildIcon } from "../guildIcon";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import PlayeSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

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
    const { primary, on } = theme.colors;

    return (
        <RectButton  {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.tittle}> {data.guild.name} </Text>
                        <Text style={styles.category}> {category.tittle} </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}> {data.date} </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayeSvg fill={owner ? primary : on} />
                            <Text style={[styles.players, { color: owner ? primary : on }]}>{
                                owner ? "Dono da bola" : "Convidado"
                            }</Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}