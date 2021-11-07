import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/background";
import { CategorySelect } from "../../components/categorySelect";
import { Header } from "../../components/Header";
import { SmallInput } from "../../components/smallInput";
import { Button } from "../../components/button";
import { ModalView } from "../../components/modalView";
import { GuildIcon } from "../../components/guildIcon";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/guild";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

export default function AppointmentCreate() {

    const navigation = useNavigation();

    const [category, setCategory] = useState('');
    const [openGuildModal, setOpenGuildModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    function handleOpenGuilds() {
        setOpenGuildModal(true);
    }
    function handlenGuildSelect(selectGuild: GuildProps) {
        setGuild(selectGuild);
        setOpenGuildModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    async function handleSave() {
        const appointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}hrs`,
            description
        }
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];
        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, appointment]));
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <Background>
                <ScrollView >
                    <Header
                        tittle="Agendar partida"
                    />
                    <Text style={[styles.label, { marginLeft: 22, marginTop: 38 }]}> Categoria </Text>
                    <CategorySelect
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                        hasCheckSelect
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {guild.icon ? <GuildIcon guildIcon={guild.icon} guildId={guild.id} /> : <View style={styles.image} />}
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : "Selecione um servidor"}
                                    </Text>
                                </View>
                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={24}
                                />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 8 }]}> Dia e Mês </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth} />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label, { marginBottom: 8 }]}> Hora e minuto </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute} />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.caracteresLimit}>Máximo 100 caracteres</Text>
                        </View>
                        <TextInput
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            style={styles.textArea}
                            onChangeText={setDescription}
                        />
                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSave} />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildModal} closeGuild={() => setOpenGuildModal(false)}>
                <Guilds handlenGuildSelect={handlenGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}