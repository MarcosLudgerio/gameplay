import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';

import { AuthProvider } from './src/hooks/auth';

import Routes from './src/routes';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {

  const [fontLoadded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontLoadded) return <AppLoading />;

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}