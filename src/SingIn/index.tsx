import React from "react";
import { View, Image, Text, StatusBar } from 'react-native';

import ButtonIcon from "../components/buttonIcon";

import ilustartionPng from '../assets/illustration.png';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Image
        source={ilustartionPng}
        style={styles.image}

      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          Suas Jogatinas {'\n'}
          Facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com os amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}

