import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { addItem } from "../actions/index";


class AddItem extends React.Component {
    //when new product is added (amount and unit aren't required) we passed it to store (function addItem defined in actions/index.js
    // with parameters action.product, action.amount and action.unit. In reducer shopping_list.js in case ADD_ITEM we also add id and bought property )
    mySubmit = values => {
        if(!values.product.trim()) {
            return
        }
        this.props.dispatch(addItem(values.product, values.amount, values.unit));
        //clearing of the form
        values.product = '';
        values.amount = '';
        values.unit = '';
    };

    //validations
    required = value => !value && 'Required';

    negative = value => value < 0 && `${value}?! Really?`;

    //
    renderInput = ({bootstrapClass, input, type, label, className, meta: {touched, error}}) => (
        <div className={bootstrapClass}>
            <input {...input} type={type} placeholder={label} className='form-control'/>
            {touched && ((error && <span className='error'>{error}</span>))}
        </div>
    );

    //I create a form using redux-form
    //Fields are used instead of inputs. They must have name property, component (for example input, select)
    //onSubmit we have to pass this.props.handleSubmit and as a callback we define what to do with form values. We can pass
    //values as a parameter of this callback.
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.mySubmit)}
                  className='row'>
                <Field name='product'
                       label='product'
                       type='text'
                       component={this.renderInput}
                       validate={this.required}
                       bootstrapClass = 'col-md-4'/>
                <Field name='amount'
                       label='amount'
                       type='number'
                       component={this.renderInput}
                       validate={this.negative}
                       bootstrapClass='col-md-2'/>
                <Field name='unit'
                       component='select'
                       className='col-md-2 form-control'>
                    <option></option>
                    <option>kg</option>
                    <option>g</option>
                    <option>l</option>
                </Field>
                <div className='col-md-1'/>
                <button type="submit" className='col-md-2 btn btn-warning'>Add Item</button>
                <div className='col-md-1'/>
            </form>
        )
    }
}

AddItem = reduxForm({
    form: 'addItem'
})(AddItem);


export default AddItem;