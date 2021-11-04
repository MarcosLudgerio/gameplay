import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { Background } from "../../components/background";
import { CategorySelect } from "../../components/categorySelect";
import { Header } from "../../components/Header";
import { SmallInput } from "../../components/smallInput";
import { Button } from "../../components/button";
import { ModalView } from "../../components/modalView";
import { Guilds } from "../Guilds";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../components/appointment";


export default function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [openGuildModal, setOpenGuildModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuildModal(true);
    }
    function handlenGuildSelect(selectGuild: GuildProps) {
        setGuild(selectGuild);
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
                        setCategory={setCategory}
                        categorySelected={category}
                        hasCheckSelect
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                <View style={styles.image} />
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        Selecione um servidor
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
                                <Text style={styles.label}> Dia e Mês </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}> Hora e minuto </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
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
                        />
                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildModal}>
                <Guilds handlenGuildSelect={handlenGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}