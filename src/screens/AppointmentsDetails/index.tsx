import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, FlatList, Share, Platform } from "react-native";
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import * as Linking from 'expo-linking';

import { Background } from "../../components/background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/listHeader";
import { Member, MemberProps } from "../../components/member";
import { ListDivide } from "../../components/listDivide";
import { ButtonIcon } from "../../components/buttonIcon";
import { AppointmentProps } from "../../components/appointment";
import { Load } from "../../components/load";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import BannerSvg from '../../assets/banner.png';
import { api } from "../../services/api";

type ParamsProps = {
    guildSelect: AppointmentProps
}

type WidgetProps = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export default function AppointmentDetails() {

    const [widget, setWidget] = useState<WidgetProps>({} as WidgetProps);
    const [load, setLoad] = useState(true);

    const route = useRoute();
    const { guildSelect } = route.params as ParamsProps;

    function handleShare() {
        const message = Platform.OS === "ios" ? `Junte-se ao servidor ${guildSelect.guild.name}` : widget.instant_invite;

        widget.instant_invite ? Share.share({ message, url: widget.instant_invite }) : alert("Convite inválido");
    }

    async function handleLink() {
        await Linking.openURL(widget.instant_invite);
    }

    async function fetchWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelect.guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            alert("Erro no engano, veja se o servidor tá bem");
        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        fetchWidget();
    }, []);

    return (
        <Background>
            <Header
                tittle="Detalhes"
                action={
                    <BorderlessButton onPress={handleShare}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={BannerSvg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title} >{guildSelect.guild.name}</Text>
                    <Text style={styles.subtitle} >{guildSelect.description}</Text>
                </View>
            </ImageBackground>

            {load ? <Load /> :
                <>
                    <ListHeader tittle="Jogadores" subtittle={`Total ${widget.members.length}`} />
                    <FlatList
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Member data={item} />}
                        ItemSeparatorComponent={() => <ListDivide isCentered />}
                    />
                    {
                        guildSelect.guild.owner ?
                            <View style={styles.footer}>
                                <ButtonIcon title="Entrar na partida" onPress={handleLink} />
                            </View> :
                            false
                    }

                </>
            }
        </Background>
    );
}