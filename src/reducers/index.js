import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import shoppingList from './shopping_list';
import visibilityFilter from './visibility_filter';

//all reducers that are included in combineReducers are passed as a parameter to createStore


export default combineReducers ({
    //key defines the name we have to pass to get to data from store
    //usually key and value are the same, then for example we can write just (visibilityFilter)
    //we can get data from store in other components using state.items and state.currentVisibilityFilter
    items: shoppingList,
    currentVisibilityFilter: visibilityFilter,
    //I have to add form: formReducer because of redux-form library
    form: formReducer
})


//reducer is a pure function which as a parameters takes previous state and action
//and return new state
