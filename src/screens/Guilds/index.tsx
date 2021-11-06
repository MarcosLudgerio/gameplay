import React from "react";
import { View, FlatList } from "react-native";

import { Guild } from "../../components/guild";
import { GuildProps } from "../../components/appointment";
import { ListDivide } from "../../components/listDivide";


import { styles } from "./styles";

type Props = {
    handlenGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handlenGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: "im",
            owner: true
        },
        {
            id: '2',
            name: 'Caras de chibatas',
            icon: null,
            owner: false
        },
        // {
        //     id: '3',
        //     name: 'Caras de chibatas',
        //     icon: null,
        //     owner: false
        // },
        // {
        //     id: '4',
        //     name: 'Caras de chibatas',
        //     icon: null,
        //     owner: false
        // },
        // {
        //     id: '5',
        //     name: 'Caras de chibatas',
        //     icon: null,
        //     owner: false
        // },
        // {
        //     id: '6',
        //     name: 'Caras de chibatas',
        //     icon: null,
        //     owner: false
        // }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Guild data={item} onPress={() => handlenGuildSelect(item)} />}
                ItemSeparatorComponent={() => <ListDivide isCentered />}
                ListHeaderComponent={() => <ListDivide isCentered />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69, paddingTop: 45 }}
                style={styles.guilds}
            />
        </View>
    );
}