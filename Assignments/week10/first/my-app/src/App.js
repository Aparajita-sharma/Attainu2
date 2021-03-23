import React from 'react';
import './App.css';
 import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decr} from './actions';
import {lcom} from './actions';

function App() {
   
   const first = useSelector(state => state.first);
   const logged = useSelector(state => state.logged);
   const dispatch = useDispatch();
   
   return (
    <div className="App">
     <h1> first {first}</h1>
     <button onClick={ () => dispatch(increment(500))}>Bonus</button>
     <button onClick={ () => dispatch(lcom(100))}>Level-complited</button>
     <button onClick={ () => dispatch(decr(250))}>Life-lost</button>
     
     {logged ? <h3>can not see</h3> : 'hi'}
     
    </div>
  );
}

export default App;
