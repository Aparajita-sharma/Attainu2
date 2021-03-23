import React, { Component } from 'react'
import PricingList from './PricingList';
import Option from './Option'

class Page extends Component {

  state = {

   Anual :[
      {
       amount: "$ 209.99",
          gb : '500GB',
        user : '2 User Allowed',
        send : 'upto 3 GB'},

       {
       amount:'$264.99',
          gb : '1 TB',
        user : '5 User Allowed',
        send : 'upto 10 GB'},

       {
       amount:'$429.99',
          gb : '2',
        user : '10 User Allowed',
        send : 'upto 20 GB'}
      ],

  // Monthly:[
  //   basic = {
  //     amount: '$ 19.99',
  //        gb : '500GB',
  //      user : '2 User Allowed',
  //      send : 'upto 3 GB'},

  //      professional = {
  //     amount:'$24.99',
  //        gb : '1 TB',
  //      user : '5 User Allowed',
  //      send : 'upto 10 GB'},

  //      master = {
  //     amount:'$39.99',
  //        gb : '2',
  //      user : '10 User Allowed',
  //      send : 'upto 20 GB'}
  //     ],
    isMonthly : false 
  }

  handleClick = (event) => {
    if(event.target.checked === true) {
      this.setState({Anual:
        [
          basic = {
            amount: '$ 19.99',
               gb : '500GB',
             user : '2 User Allowed',
             send : 'upto 3 GB'},
      
             professional = {
            amount:'$24.99',
               gb : '1 TB',
             user : '5 User Allowed',
             send : 'upto 10 GB'},
      
             master = {
            amount:'$39.99',
               gb : '2',
             user : '10 User Allowed',
             send : 'upto 20 GB'}
            ],})
    }
  }

  
  render() {
    return (
      <div>
          <Option isSwichon={this.state.isMonthly} custom={this.handleClick}/>
       
        {this.state.Anual ? this.state.Anual.map(user =>(<PricingList key={user.amount} currentState={user}/>)):null} 
        
      </div>
    )
  }
}
export default Page;
