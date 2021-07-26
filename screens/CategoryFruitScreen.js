import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FruitItem from '../components/FruitItem';
import ShowCart from '../components/ShowCart';
import { filterFruit, selectFruit } from '../store/actions/fruit.action';

const CategoryBreadScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBreads);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filterFruit(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectFruit(item.id));
    navigation.navigate('DetailBread', { name: item.name });
  }
  const renderItem = ({ item }) => <FruitItem item={item} onSelected={handleSelected} />

  return (
    <View>
      <FlatList
        data={categoryBreads}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ShowCart navigation={navigation} />
    </View>
  )
}

export default CategoryBreadScreen;