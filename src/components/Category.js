import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../actions';
import '../styles/style.css';

const CategoryFilter = () => {
  const category = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork',
    'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];
  const dispatch = useDispatch();

  const HandleFilter = (e) => {
    dispatch(fetchRecipes(e));
  };
  return (
    <select name="category" id="cat" onChange={(e) => HandleFilter(e.target.value)} defaultValue="DEFAULT">
      {category.map((cat) => (

        <option value={cat} key={cat}>{cat}</option>

      ))}

    </select>

  );
};
export default CategoryFilter;
