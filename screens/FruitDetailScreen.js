import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ShowCart from '../components/ShowCart';
import Colors from '../constants/colors';

import { addItem } from '../store/actions/cart.action';

const FruitDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.fruit.selected) || {};

  const handleAddItem = () => dispatch(addItem(item));

  return (
    <View style={styles.screen}>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <Text style={styles.text}>{item.weight}gr</Text>
      </View>
      <Button title="AGREGAR AL CARRITO" onPress={handleAddItem} color={Colors.primary} />
      <ShowCart navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 10,
  },
  detail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Quicksand',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Quicksand',
  }
});

export default FruitDetailScreen;