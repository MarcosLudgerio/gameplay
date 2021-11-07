import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/guild";
import { ListDivide } from "../../components/listDivide";
import { Load } from "../../components/load";
import { api } from "../../services/api";

import { styles } from "./styles";

type Props = {
    handlenGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handlenGuildSelect }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    return (
        <View style={styles.container}>
            {loading ?
                <Load /> :
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
            }
        </View>
    );
}