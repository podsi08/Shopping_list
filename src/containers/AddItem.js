import React from 'react';
import { connect } from 'react-redux';
import { addItem } from "../actions/index";

class AddItem extends React.Component {
    render(){
        let input;
        return(
            <div>
                <form
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
                    />
                    <button type="submit">
                        Add Item
                    </button>
                </form>
            </div>
        )
    }
}

AddItem = connect()(AddItem);

export default AddItem;