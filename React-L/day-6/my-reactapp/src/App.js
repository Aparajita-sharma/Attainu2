import React from "react";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './Navbar';
import {Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className= "App">
      <Navbar />
      <Switch> 
        <Route exact path= "/" component={Home} />
        {/**<h1 history={} match={} Location={}> sfgkyfguhftygku </h1> */}
        <Route exact path = "/contact" component={Contect} />
        <Route exact path = "/about" component= {About} />
        <Redirect />
      </Switch>
    </div>
  )
}














































































































































































































































































































import {Route, Switch} from 'react-router-dom'

function App() {
  // contact
  return (
    <div className="App">

      <Navbar />

      <Switch>
      <Route path="/contact/sub" render={(renderProps) => <h1 {...renderProps}>hi there</h1>}/>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      </Switch>
  </div>
  );
}

export default App;
