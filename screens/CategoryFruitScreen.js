import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FruitItem from '../components/FruitItem';
import ShowCart from '../components/ShowCart';
import { filterFruit, selectFruit } from '../store/actions/fruit.action';

const CategoryFruitScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryFruit = useSelector(state => state.fruit.filteredFruit);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filterFruit(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectFruit(item.id));
    navigation.navigate('DetailFruit', { name: item.name });
  }
  const renderItem = ({ item }) => <FruitItem item={item} onSelected={handleSelected} />

  return (
    <View>
      <FlatList
        data={categoryFruit}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ShowCart navigation={navigation} />
    </View>
  )
}

export default CategoryFruitScreen;