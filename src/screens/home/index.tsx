import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

    const navigation = useNavigation();

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
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40hrs',
            description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        },
        // {
        //     id: '3',
        //     guild: {
        //         id: '1',
        //         name: 'Lendários',
        //         icon: null,
        //         owner: true
        //     },
        //     category: '1',
        //     date: '22/06 às 20:40hrs',
        //     description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        // },
        // {
        //     id: '4',
        //     guild: {
        //         id: '2',
        //         name: 'Lendários',
        //         icon: null,
        //         owner: true
        //     },
        //     category: '1',
        //     date: '22/06 às 20:40hrs',
        //     description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        // },
        // {
        //     id: '5',
        //     guild: {
        //         id: '1',
        //         name: 'Lendários',
        //         icon: null,
        //         owner: true
        //     },
        //     category: '1',
        //     date: '22/06 às 20:40hrs',
        //     description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        // },
        // {
        //     id: '6',
        //     guild: {
        //         id: '2',
        //         name: 'Lendários',
        //         icon: null,
        //         owner: true
        //     },
        //     category: '1',
        //     date: '22/06 às 20:40hrs',
        //     description: "A descrição descreve o que será descrito desecrevendo uma descrição"
        // }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointment() {
        navigation.navigate("AppointmentDetails");
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppoitmentCreate")
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader tittle="Partidas agendadas" subtittle={`Total ${appoiments.length}`} />
            <FlatList
                data={appoiments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Appointment data={item} onPress={handleAppointment} />}
                ItemSeparatorComponent={() => <ListDivide />}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 69 }}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    );
}