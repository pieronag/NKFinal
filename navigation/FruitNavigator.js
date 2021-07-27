import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FruitDetailScreen from "../screens/FruitDetailScreen";
import CategoriesScreen from '../screens/CategoryScreen';
import CategoryFruitScreen from '../screens/CategoryFruitScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constants/colors';

const BreadStack = createStackNavigator();

const FruitNavigator = () => (
  <BreadStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.third : '',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <BreadStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: 'Frutas' }}
    />
    <BreadStack.Screen
      name="FruitCategory"
      component={CategoryFruitScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="DetailFruit"
      component={FruitDetailScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Carrito' }}
    />
  </BreadStack.Navigator>
);

export default FruitNavigator;