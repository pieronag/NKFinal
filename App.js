import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import MainNavigator from './navigation';


import store from './store';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  
  const [dataLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Yomogi': require('./assets/fonts/Yomogi-Regular.ttf'),
    'KGT': require('./assets/fonts/KGTwoisBetterThanOne.ttf'),
  })

  if (!dataLoaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
