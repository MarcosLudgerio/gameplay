import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg'
import { theme } from "../../global/styles/theme";

const { CDN_IMAGE } = process.env;

type Props = {
    guildIcon: null | string;
    guildId: string;
}

export function GuildIcon({ guildIcon, guildId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${guildIcon}.png`;

    return (
        <View style={[styles.container, { backgroundColor: guildId ? 'transparent' : theme.colors.discord }]}>
            {guildId ?
                <Image source={{ uri }} style={styles.image} resizeMode="cover" /> :
                <DiscordSvg width={40} height={40} />
            }
        </View>
    );
}