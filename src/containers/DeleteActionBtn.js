import { connect } from 'react-redux';
import { deleteItems } from "../actions/index";

import DeleteBtn from '../components/DeleteBtn';


const mapDispatchToProps = (dispatch, ownProps) => {
     return {
         onClick: () => dispatch(deleteItems(ownProps.toDelete))
     };
};


const DeleteActionBtn = connect(
    //I don't need to pass state to DeleteBtn props in mapStateToProps (I have to put null or undefined)
    null,
    mapDispatchToProps
)(DeleteBtn);

export default DeleteActionBtn;