import React from 'react';
import { connect } from 'react-redux';
import { addItem } from "../actions/index";

class AddItem extends React.Component {
    render(){
        let input;
        return(
            <div>
                <form
                    className='row'
                    onSubmit={e => {
                        e.preventDefault();
                        if(!input.value.trim()){
                            return
                        }
                        this.props.dispatch(addItem(input.value));
                        input.value = ''
                    }}
                >
                    <input
                        ref={node => {
                            input = node
                        }}
                        className='col-sm-6 form-control'
                    />
                    <div className='col-sm-1'/>
                    <button type="submit" className='col-sm-2 btn btn-warning'>
                        Add Item
                    </button>
                    <div className='col-sm-3'/>
                </form>
            </div>
        )
    }
}

AddItem = connect()(AddItem);

export default AddItem;