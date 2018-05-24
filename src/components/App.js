import React from 'react';
import Footer from './Footer';
import AddItem from '../containers/AddItem';
import VisibleShoppingList from '../containers/VisibleShoppingList';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/main.css';


class App extends React.Component {
    submit = values => {
        console.log(values);
    };

    render(){
        return (
            <div className='container'>
                <h3 className='row'>Shopping List</h3>
                <AddItem className='row'/>
                <VisibleShoppingList/>
                <Footer/>
            </div>
        )
    }
}

export default App;