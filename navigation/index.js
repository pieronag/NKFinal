import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import FruitNavigator from './FruitNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const loggedIn = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      {loggedIn
        ? <FruitNavigator/> 
        : <AuthNavigator />
      }
    </NavigationContainer>
  )
}