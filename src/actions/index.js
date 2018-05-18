//actions are payloads of information that send data from application to store
//actions are the only source of informations for store
//they're send using store.dispatch().
//actions must have a type property

// {
//     type: ADD_ITEM,
//     product:
// }

// {
//     type: TOGGLE_ITEM,
//     index:
// }

// {
//     type: SET_VISIBILITY_FILTER,
//     filter: SHOW_BOUGHT
// }


//action creator - functions that create actions

//type of actions we defined as a strings
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_BOUGHT: 'SHOW_BOUGHT',
    SHOW_TO_BUY: 'SHOW_TO_BUY'
};

let nextItemId = 0;

export const addItem = (product) => {
    //each time we add a new product, the nextItemId is increment
    return {
        type: ADD_ITEM,
        id: nextItemId++,
        product
    }
};

export const toggleItem = (id) => {
    return {
        type: TOGGLE_ITEM,
        id
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};