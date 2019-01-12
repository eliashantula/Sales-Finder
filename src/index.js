import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import groceryItem from './reducers'
let store = createStore(groceryItem, applyMiddleware(thunk))


ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
