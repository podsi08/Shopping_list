//actions to paczki informacji wysyłane z aplikacji do store.
// Są jedynym źródłem informacji dla store.
// Wysyłane są przy pomocy store.dispatch().
// Muszą mieć określony typ

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

//action creator -> functions that create actions

//typy akcji definiujemy jako stringi
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextItemId = 0;

export const addItem = (product) => {
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


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_BOUGHT: 'SHOW_BOUGHT',
    SHOW_TO_BUY: 'SHOW_TO_BUY'
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}