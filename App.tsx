
import React, { useCallback,  } from 'react';

import { SafeAreaProvider,initialWindowMetrics } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,

} from '@expo-google-fonts/inter';
import Navigation from './src/navigation';




SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter_900':Inter_900Black,
    'Inter_400':Inter_400Regular,
    'Inter_500':Inter_500Medium,
    'Inter_700':Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation />
    </SafeAreaProvider>

  );
}
