import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../styles/ingredients.module.css';
import '../styles/style.css';

const Ingredients = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains('close-ingredients')) {
      history.push('');
    }
  };
  const ingredients = useSelector((state) => state.ingredient);

  const ingred = ingredients.ingredients.meals;

  return (
    <div
      className={`${'close-ingredients'} ${'ingredient'} ${'tablet'}`}
      role="button"
      tabIndex="0"
      onClick={exitDetailHandler}
      onKeyDown={exitDetailHandler}
    >
      <div className="ingredient-list">
        <div>
          <span
            className={`${'close-ingredients'} ${'span'}`}
            role="button"
            tabIndex="0"
            onClick={exitDetailHandler}
            onKeyDown={exitDetailHandler}
          >
            Close

          </span>

        </div>

        <h2 className="h2">Ingredients</h2>
        <ul className="ul">
          {ingred.map((ingredient) => (
            <div key={ingredient.strIngredient1}>
              <li key={ingredient.strIngredient1} className="li">
                {ingredient.strIngredient1}
              </li>
              <li key={ingredient.strIngredient2} className="li">
                {ingredient.strIngredient2}
              </li>
              <li key={ingredient.strIngredient3} className="li">
                {ingredient.strIngredient3}
              </li>
              <li key={ingredient.strIngredient4} className="li">
                {ingredient.strIngredient4}
              </li>
              <li key={ingredient.strIngredient5} className="li">
                {ingredient.strIngredient5}
              </li>
              <li key={ingredient.strIngredient6} className="li">
                {ingredient.strIngredient6}
              </li>

            </div>

          ))}
        </ul>
      </div>
    </div>

  );
};

export default Ingredients;
