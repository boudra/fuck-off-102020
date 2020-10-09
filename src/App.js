import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider, useSelector} from 'react-redux';
import './App.scss';
import Form from './Form';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const initialState = {
  isLoading: false,
  greeting: ""
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SET_GREETING":
      return {...state, greeting: action.payload};

    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)));

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      {isLoading ? "Loading..." : <Form/>}
    </div>
  );
}

export default function() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
