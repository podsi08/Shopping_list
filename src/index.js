import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';


//store przetrzymuje stan aplikacji (jest tylko jeden), możemy się do niego dostać przez getState()
//pozwala zmieniać state poprzez dispatch(action)
//dodaje słuchaczy poprzez subscribe(listener)

const store = createStore(rootReducer);

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
