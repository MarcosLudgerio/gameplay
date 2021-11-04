import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = "https://logosmarcas.net/wp-content/uploads/2020/11/Discord-Emblema.jpg";
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}