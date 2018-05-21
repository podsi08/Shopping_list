import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render(){
        return (
            <li
                onClick={this.props.onClick}
                className={this.props.bought ?
                           'row list-group-item list-group-item-dark' :
                           'row list-group-item list-group-item-warning'}
            >
                {this.props.product}{this.props.amount}{this.props.unit}
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