

//jako domyślny parametr (gdy jeszcze nie ma listy, podajemy pustą tablicę)
const shoppingList = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    product: action.product,
                    bought: false
                }
            ];
        case 'TOGGLE_ITEM':
            return state.map(item =>
                (item.id === action.id) ? {...item, bought: !item.bought} : item
            );
        default:
            return state;
    }
};

export default shoppingList;