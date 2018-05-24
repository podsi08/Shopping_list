import { connect } from 'react-redux';
import { deleteAll, deleteBought } from "../actions/index";
import DeleteBtn from '../components/DeleteBtn';


const mapDispatchToProps = dispatch => {
    return {
        deleteBought: () => {
            dispatch(deleteBought())
        },
        deleteAll: () => {
            dispatch(deleteAll())
        }
    }
};


const DeleteActionBtn = connect(
    // mapStateToProps,
    mapDispatchToProps
)(DeleteBtn);

export default DeleteActionBtn;