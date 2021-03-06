/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import { fetchRecipes } from '../actions';
import '../styles/style.css';
import { fetchIngredients } from '../actions/ingredient';
import CategoryFilter from '../components/Category';

const ItemList = ({ recipes, fetchRecipes }) => {
  const [fil, setFil] = useState('');
  useEffect(() => {
    fetchRecipes();
    fetchIngredients();
  }, []);

  const search = (recipes) => recipes.recipes.meals.filter((result) => result.strMeal
    .toLowerCase().indexOf(fil) > -1);

  return (

    <div>
      <div className="category">

        <input
          className="input"
          type="text"
          placeholder="Search for recipes"
          value={fil}
          onChange={(e) => setFil((e.target.value).toLowerCase())}
        />
        <CategoryFilter />
      </div>
      <div>

        <Recipe recipes={search(recipes)} />
      </div>
    </div>
  );
};
export const mapStateToProps = (state) => ({
  recipes: state.recipe,

});

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  fetchIngredient: () => dispatch(fetchIngredients()),
});

ItemList.propTypes = {
  recipes: PropTypes.object,
  fetchRecipes: PropTypes.func.isRequired,

};
ItemList.defaultProps = {
  recipes: {},

};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
