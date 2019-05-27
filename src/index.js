import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { imagesDataReducer } from './redux/reducers/imagesDataReducer';
import { displayModeReducer } from './redux/reducers/displayModeReducer';
import './index.scss';

const reducers = combineReducers({ imagesDataReducer, displayModeReducer });
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
