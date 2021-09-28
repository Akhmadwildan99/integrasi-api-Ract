import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  total: 7
}
// Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'ADD_ORDER') {
    return {
      ...state,
      total: state.total + 1
    }
  }

  if(action.type === 'MINUS_ORDER') {
    let total = 0
    if(state.total > 0) {
      return {
        ...state,
        total: state.total - 1
      }
    }

    return {
      ...state,
      total: total 
    }
    
  }
  return state
}
// strore
const storeRedux = createStore(rootReducer);

ReactDOM.render(
    <Provider store={storeRedux}>
      <App />
    </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
