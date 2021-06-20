import React, {Component} from 'react';
import './App.css';
import PricingList from './components/PricingList';
import PricingListItem from './components/PricingListItem';
import Option from './components/Option';
import Title from './components/Title';
import Page from './components/Page';

 class App extends Component {
render() {
    return (
      <div>
        <Title/>
        <Option/>
        <PricingList/>
        <PricingListItem/>
        <Page />
        
      </div>
    )
  }
}
export default App;

 
