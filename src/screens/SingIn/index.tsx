import React from "react";
import { View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import ButtonIcon from "../../components/buttonIcon";
import { Background } from "../../components/background";

import ilustartionPng from '../../assets/illustration.png';
import { styles } from './styles';

export default function SignIn() {

  const navigation = useNavigation();

  function handleSigIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={ilustartionPng}
          style={styles.image}

        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize {'\n'}
            suas jogatinas!
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com os amigos.
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={handleSigIn} />
        </View>
      </View>
    </Background>
  );
}

