import { combineReducers } from 'redux';
import shoppingList from './shopping_list';
import visibilityFilter from './visibility_filter';

export default combineReducers ({
    shoppingList,
    visibilityFilter
})

//reducer to funkcja czysta, która jako parametry przyjmuje poprzedni stan, akcję i
//zwraca nowy stan