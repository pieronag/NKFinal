export const SELECT_FRUIT = 'SELECT_FRUIT';
export const FILTER_FRUIT = 'FILTERED_FRUIT';

export const selectFruit = (id) => ({
  type: SELECT_FRUIT,
  breadID: id,
})

export const filterFruit = (id) => ({
  type: FILTER_FRUIT,
  categoryID: id,
})