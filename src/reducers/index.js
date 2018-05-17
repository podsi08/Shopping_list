import { combineReducers } from 'redux';
import shoppingList from './shopping_list';
import visibilityFilter from './visibility_filter';

//all reducers that are included in combineReducers are passed as a parameter to createStore

export default combineReducers ({
    //key defines the name we have to pass to get to data from store
    //usually key and value are the same, then for example we can write just (visibilityFilter)
    items: shoppingList,
    currentVisibilityFilter: visibilityFilter
})


//reducer is a pure function which as a parameters takes previous state and action
//and return new state
