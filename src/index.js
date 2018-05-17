import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
//in file reducers/index.js I made export default so now I can give combineReducers other name (rootReducer)
import rootReducer from './reducers';


//store:
//holds application state;
//allows access to state via getState();
//allows state to be update via dispatch(action);
//register listeners via subscribe(listener);
//there is only a single store;

const store = createStore(rootReducer);

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
