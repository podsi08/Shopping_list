import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';


class ShoppingList extends React.Component {
    render(){
        return (
            <div className='row'>
                <ul className='col-md-7'>
                    {
                        this.props.items.map((item) => (
                            <Product key={item.id}
                                     bought={item.bought}
                                     product={item.product}
                                     amount={item.amount}
                                     unit={item.unit}
                                     onClick={() => {this.props.toggleItem(item.id)}}/>
                        ))
                    }
                </ul>
                <div className='col-md-5'/>
            </div>

        )
    }
}

ShoppingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            bought: PropTypes.bool.isRequired,
            product: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleItem: PropTypes.func.isRequired
};

export default ShoppingList;