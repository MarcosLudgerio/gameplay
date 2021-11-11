import React, { useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Profile } from "../../components/profile";
import { Background } from "../../components/background";
import { ButtonAdd } from "../../components/addButton";
import { CategorySelect } from "../../components/categorySelect";
import { ListHeader } from "../../components/listHeader";
import { Appointment, AppointmentProps } from "../../components/appointment";
import { ListDivide } from "../../components/listDivide";
import { Load } from "../../components/load";

import { styles } from "./styles";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

export default function Home() {

    const [category, setCategory] = useState('');
    const [appoiments, setAppointments] = useState<AppointmentProps[]>([]);
    const [load, setLoad] = useState(true);

    const navigation = useNavigation();

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) setAppointments(storage.filter(item => item.category === category));
        else setAppointments(storage);

        setLoad(false);
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointment(guildSelect: AppointmentProps) {
        navigation.navigate("AppointmentDetails", { guildSelect });
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppoitmentCreate");
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

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
            {load ?
                <Load /> :
                <>
                    <ListHeader tittle="Partidas agendadas" subtittle={`Total ${appoiments.length}`} />

                    <FlatList
                        data={appoiments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Appointment data={item} onPress={() => handleAppointment(item)} />}
                        ItemSeparatorComponent={() => <ListDivide />}
                        style={styles.matches}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }
        </Background>
    );
}