import React from 'react';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function App() {
   
   const first = useSelector(state => state.first);
   const dispatch = useDispatch;
   

  return (
    <div className="App">
   //<h1> first {first}</h1>
     <button onClick={ () => dispatch(increment)}>+</button>
     
    </div>
  );
}

export default App;
