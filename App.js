import { SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './scr/main';
import React from 'react';
export default function App() {
  return (
    <SafeAreaProvider>
    <Main></Main>
    </SafeAreaProvider>

  );
}


