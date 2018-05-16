import React from 'react';
import Footer from './Footer';
import AddItem from '../containers/AddItem';
import VisibleShoppingList from '../containers/VisibleShoppingList';

class App extends React.Component {
    render(){
        return (
            <div>
                <AddItem/>
                <VisibleShoppingList/>
                <Footer/>
            </div>
        )
    }
}

export default App;