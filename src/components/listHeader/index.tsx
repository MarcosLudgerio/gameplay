import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Prpos = {
    tittle: string;
    subtittle: string
}

export function ListHeader({ tittle, subtittle }: Prpos) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{tittle}</Text>
            <Text style={styles.subtitle}>{subtittle}</Text>
        </View>
    );
}