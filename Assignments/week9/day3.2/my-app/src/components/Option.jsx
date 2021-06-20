import React, { Component } from 'react';
import '../styles/Option.css';
import PricingList from './PricingList';
import Toggle from './Toggle';
class Option extends Component {
  
state = {
   annual :[
       { id : 'Basic', 
        amount: '$ 209.99',
            gb : '500GB',
          user : '2 User Allowed',
          send : 'upto 3 GB'},

        {
          id: 'Professional',
        amount:'$264.99',
            gb : '1 TB',
          user : '5 User Allowed',
          send : 'upto 10 GB'},

        {
          id : 'Master',
        amount:'$429.99',
            gb : '2',
          user : '10 User Allowed',
          send : 'upto 20 GB'}
        ],

        monthly :[
          { id : 'basic', 
           amount: '$ 876.99',
               gb : '1000GB',
             user : '4 User Allowed',
             send : 'upto 2 GB'},
   
           {
             id: 'professional',
           amount:'$264.99',
               gb : '1 TB',
             user : '5 User Allowed',
             send : 'upto 10 GB'},
   
           {
             id : 'master',
           amount:'$429.99',
               gb : '2',
             user : '10 User Allowed',
             send : 'upto 20 GB'}
           ],
   
           toggle : false
 };

 handleToggle=(toggleState)=>{
   this.setState({
     toggle : !toggleState
   })
 }

 render() {
return (
      <div >
        
        <Toggle switchOn={this.state.toggle} onClick={this.handleToggle}/>
        
        {this.state.toggle? this.state.annual.map(data =>(
          <PricingList key={data.id} currentData={data}/>
        ) ): this.state.monthly.map(data=>(
          <PricingList key={data.id} currentData={data}/>
        )) }
       
      </div>
        )
 }
  };


export default Option;
