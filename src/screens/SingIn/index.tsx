import React from "react";
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native';

import { ButtonIcon } from "../../components/buttonIcon";
import { Background } from "../../components/background";
import { useAuth } from "../../hooks/auth";

import ilustartionPng from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from "../../global/styles/theme";

export function SignIn() {

  const { loading, signIn } = useAuth();

  async function handleSigIn() {
    try {
      await signIn();
      Alert.alert('Logado');
    } catch (error) {
      Alert.alert(`${error}`);
    }
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
          {loading ?
            <ActivityIndicator color={theme.colors.primary} />
            :
            <ButtonIcon title="Entrar com Discord" onPress={handleSigIn} />
          }
        </View>
      </View>
    </Background>
  );
}

