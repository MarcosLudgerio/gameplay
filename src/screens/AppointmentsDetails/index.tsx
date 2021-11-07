import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/listHeader";
import { Member } from "../../components/member";
import { ListDivide } from "../../components/listDivide";
import { ButtonIcon } from "../../components/buttonIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import BannerSvg from '../../assets/banner.png';


export default function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Marcão da massa',
            avatar_url: 'https://github.com/marcosludgerio.png',
            status: 'offline'
        },
        {
            id: '2',
            username: 'Jeff Dogão',
            avatar_url: 'https://github.com/rodjefalves.png',
            status: 'online'
        },
        {
            id: '3',
            username: 'Vitão das Cachorras',
            avatar_url: 'https://github.com/vitoramrm.png',
            status: 'online'
        }
    ]

    return (
        <Background>
            <Header
                tittle="Detalhes"
                action={
                    <BorderlessButton>
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
                    <Text style={styles.title} >Puteiro</Text>
                    <Text style={styles.subtitle} >Hora do showww</Text>
                </View>
            </ImageBackground>

            <ListHeader tittle="Jogadores" subtittle={`Total ${members.length}`} />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Member data={item} />}
                ItemSeparatorComponent={() => <ListDivide isCentered />}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
}