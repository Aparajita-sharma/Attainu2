import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from'./reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers/root';
import {Provider} from 'react-redux';


const store = createStore(allReducers);


{/*//ACTIONS
const inc1= () => {
  return{
    type : 'UPDATE_BONUS'
  }
}
const inc2= () => {
  return{
    type : 'LEVEL_COMPLETED'
  };
};
const decr= () => {
  return{
    type : 'LIFE_LOST'
  };
};

//reducer
const reducer = (currentScore=0, actions) => {
  switch (actions.type){
    case 'UPDATE_BONUS':
      return currentScore + 100;

      case 'LEVEL_COMPLETED':
        return currentScore + 500;
        
        case 'LIFE_LOST':
          return currentScore - 250;
        
          
  }
}

let store = createStore(reducer);

//disply in the console
store.subscribe(()=> console.log(store.getState()));

//Didpatch
store.dispatch(inc1());
store.dispatch(inc2());
store.dispatch(decr());*/}

ReactDOM.render(
  <Provider store={store}>
  
    <App />
 
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
