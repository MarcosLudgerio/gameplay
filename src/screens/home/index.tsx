import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { Profile } from "../../components/profile";
import { Background } from "../../components/background";
import { ButtonAdd } from "../../components/addButton";
import { CategorySelect } from "../../components/categorySelect";
import { ListHeader } from "../../components/listHeader";
import { Appointment } from "../../components/appointment";
import { ListDivide } from "../../components/listDivide";

import { styles } from "./styles";

export default function Home() {

    const [category, setCategory] = useState('');

    const appoiments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40hrs',
            description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        },
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40hrs',
            description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    tittle="Partidas agendadas"
                    subtittle="6"
                />
                <FlatList
                    data={appoiments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Appointment data={item} />}
                    ItemSeparatorComponent={() => <ListDivide />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
}