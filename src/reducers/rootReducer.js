import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';
import '../styles/style.css';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  ingredient: ingredientReducer,
});

export default rootReducer;
