import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableComponent from './TouchableComponent';

const FruitItem = ({ item, onSelected }) => {
  return (
    <TouchableComponent onPress={() => onSelected(item)} style={styles.fruitItem}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableComponent>
  );
}

const styles = StyleSheet.create({
  fruitItem: {
    height: 150,
    backgroundColor: '#ccc',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  price: {
    fontFamily: 'Quicksand',
  },
});

export default FruitItem;