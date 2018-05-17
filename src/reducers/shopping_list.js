//as a default parameter (when there is no list) we give an empty array

const shoppingList = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            //the result is an old array with new object added at the end
            return [
                ...state,
                {
                    id: action.id,
                    product: action.product,
                    bought: false
                }
            ];
        case 'TOGGLE_ITEM':
            //if action id is the same as an item id, bought boolean will change
            return state.map(item =>
                (item.id === action.id) ? {...item, bought: !item.bought} : item
            );
        default:
            return state;
    }
};

export default shoppingList;