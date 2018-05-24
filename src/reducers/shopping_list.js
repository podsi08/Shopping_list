//as a default parameter (when there is no list) we give an empty array

const saveToLocalStorage = (data) => {
    localStorage.setItem('shopping_list', JSON.stringify(data));
};

const loadDataFromLocalStorage = () => {
    const storageShoppingList = JSON.parse(localStorage.getItem('shopping_list'));

    if(storageShoppingList === null) {
        return [];
    } else {
        return storageShoppingList;
    }
};


const shoppingList = (state = loadDataFromLocalStorage(), action) => {
    //I create variable which is a copy of state (I can't change old state in reducer -> it's a pure function)
    let storageShoppingList = [...state];

    let lastId = storageShoppingList.length === 0 ?
                   -1: storageShoppingList[storageShoppingList.length - 1].id;

    switch(action.type) {
        case 'ADD_ITEM':
            let newProduct = {
                id: lastId + 1,
                product: action.product,
                bought: false,
                amount: action.amount,
                unit: action.unit
            };

            //I add a new product at the end of the shopping list from local storage
            storageShoppingList.push(newProduct);

            //I save new list to local storage
            saveToLocalStorage(storageShoppingList);

            //the result (new state) is an old array with new object added at the end
            return storageShoppingList;

        case 'TOGGLE_ITEM':
            //if action id is the same as an item id, bought boolean will change
            const newState = storageShoppingList.map(item =>
                (item.id === action.id) ? {...item, bought: !item.bought} : item
            );

            //I save new list with bought product property changed to local storage
            saveToLocalStorage(newState);

            //I return newState
            return newState;

        case 'DELETE_ITEM':
            //there are two cases of DELETE_ITEM. Function deleteItems from action/index.js take as parameter
            //toDelete (the props of DeleteActionBtn)

            if (action.toDelete === 'DELETE_BOUGHT'){
                const toBuy = storageShoppingList.filter(item => !item.bought);

                saveToLocalStorage(toBuy);

                return toBuy;
            }
            if (action.toDelete === 'DELETE_ALL'){

                localStorage.removeItem('shopping_list');

                return []
            }
            break;

        default:
            return state;
    }
};

export default shoppingList;