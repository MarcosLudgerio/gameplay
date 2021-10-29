import React from "react";
import { View, Image, Text } from 'react-native';

import ilustartionPng from '../assets/illustration.png';
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={ilustartionPng}
        style={styles.image}

      />
      <Text style={styles.title}>
        Organize {'\n'}
        Suas Jogatinas {'\n'}
        Facilmente {'\n'}
      </Text>
    </View>
  );
}

