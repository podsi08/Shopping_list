import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render(){
        return (
            <li
                onClick={this.props.onClick}
                style={{textDecoration: this.props.bought ? 'line-through' : 'none'}}
            >
                {this.props.product}
            </li>
        )
    }
}

Product.propTypes = {
    onClick: PropTypes.func.isRequired,
    bought: PropTypes.bool.isRequired,
    product: PropTypes.string.isRequired
};

export default Product;