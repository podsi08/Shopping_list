import React from 'react';
import PropTypes from 'prop-types'

class Link extends React.Component {
    render(){
        if (this.props.active) {
            return <span className='text-warning'>{this.props.children}</span>
        }

        return(
            <a
                href=""
                onClick={e => {
                    e.preventDefault();
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link