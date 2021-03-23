import React, {Component} from 'react';
import './App.css';
import ReviewUser from './ReviewUser';

class App extends Component {
 state = {
  
   ProfilePicURL : "https://i.pravatar.cc/200",
   Name : "Mohit",
   Email :"mohitdaswanii@gmail.com",
   Review : "yu",
   Rating : 9
}

  render() {
    return (
      <div className ="App">
        Hello My name is {this.state.Name} 
        {<ReviewUser currentelement={this.state} />}
      </div>
    );
  }
 
}

export default App;
