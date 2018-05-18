import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actions/index";
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        //this.props.active in Link component
        active: ownProps.filter === state.currentVisibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //in Link component now we can use this function by writing this.props.onClick
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};


//Link is a presentational component (how things look), FilterLink is a container component (how things work).
//In Footer we render FilterLink
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;