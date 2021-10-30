import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/home';
import { Background } from './src/components/background';

export default function App() {

  const [fontLoadded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontLoadded) return <AppLoading />;

  return (
    <Background>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Home />
    </Background>
  );
}