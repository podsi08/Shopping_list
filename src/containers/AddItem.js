import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from "../actions/index";


class AddItem extends React.Component {
    mySubmit = values => {
        console.log(values);

        if(!values.product.trim()) {
            return
        }
        this.props.dispatch(addItem(values.product, values.amount, values.unit));
    }
    render(){


        return(
            <form onSubmit={this.props.handleSubmit(this.mySubmit)}>
                <Field name='product'
                       component='input'
                       type='text'
                       placeholder='product'/>
                <Field name='amount'
                       component='input'
                       type='number'
                       placeholder='amount'/>
                <Field name='unit'
                       component='select'>
                    <option></option>
                    <option>pcs.</option>
                    <option>kg</option>
                    <option>g</option>
                    <option>l</option>
                </Field>
                <button type="submit">Add Item</button>
            </form>

            // <div>
            //     <form
            //         className='row'
            //         onSubmit={e => {
            //             e.preventDefault();
            //             if(!input.value.trim()){
            //                 return
            //             }
            //             this.props.dispatch(addItem(input.value));
            //             input.value = ''
            //         }}
            //     >
            //         <input
            //             ref={node => {
            //                 input = node
            //             }}
            //             className='col-sm-6 form-control'
            //             placeholder='product'
            //         />
            //         <input
            //             placeholder='amount'/>
            //         <select className='form-control'>
            //             <option>unit</option>
            //             <option>pcs.</option>
            //             <option>kg</option>
            //             <option>g</option>
            //             <option>l</option>
            //         </select>
            //         <div className='col-sm-1'/>
            //         <button type="submit" className='col-sm-2 btn btn-warning'>
            //             Add Item
            //         </button>
            //         <div className='col-sm-3'/>
            //     </form>
            // </div>
        )
    }
}

AddItem = reduxForm({
    form: 'addItem'
})(AddItem);

// AddItem = connect()(AddItem);

export default AddItem;