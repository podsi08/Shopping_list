import React from 'react';
import PropTypes from 'prop-types'

class DeleteBtn extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}
                    name={this.props.name}
                    className='btn btn-warning col-md-3'>{this.props.name}</button>
        )
    }
}

DeleteBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default DeleteBtn