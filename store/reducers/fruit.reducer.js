import { FRUITS } from '../../data/fruit';
import { SELECT_FRUIT, FILTER_FRUIT } from '../actions/fruit.action';

const INITIAL_STATE = {
  list: FRUITS,
  filteredFruits: [],
  selected: null,
}

const BreadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_FRUIT:
      return {
        ...state,
        selected: state.list.find(fruit => fruit.id === action.breadID),
      };
    case FILTER_FRUIT:
      return {
        ...state,
        filteredFruits: state.list.filter(fruit => fruit.category === action.categoryID),
      }
    default:
      return { ...state };
  }
}

export default BreadReducer;