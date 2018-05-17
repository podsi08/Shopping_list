import { connect } from 'react-redux';
import {toggleItem} from "../actions/index";
import ShoppingList from "../components/ShoppingList";

// To use connect(), you need to define a special function called mapStateToProps that tells how to transform the
// current Redux store state into the props you want to pass to a presentational component (in this case ShoppingList)
// you are wrapping.

const getVisibleShoppingList = (items, filter) => {
    switch (filter) {
        case 'SHOW_BOUGHT':
            return items.filter(i => i.bought);
        case 'SHOW_TO_BUY':
            return items.filter(i => !i.bought);
        case 'SHOW_ALL':
        default:
            return items
    }
};


const mapStateToProps = state => {
    return {
        items: getVisibleShoppingList(state.items, state.currentVisibilityFilter)
    }
};
//in presentional component ShoppingList we can use props -> this.props.items (items is a key from object we return in
//mapStateToProps


// In addition to reading the state, container components can dispatch actions. In a similar fashion, you can define
// a function called mapDispatchToProps() that receives the dispatch() method and returns callback props that you want
// to inject into the presentational component.

const mapDispatchToProps = dispatch => {
    return {
        toggleItem: id => {
            dispatch(toggleItem(id))
        }
    }
};

//in presentional component ShoppingList now onClick we can use props -> this.props.toggleItem (items is a key from object
//we return in mapDispatchToProps

const VisibleShoppingList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingList);

export default VisibleShoppingList;