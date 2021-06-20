import React from 'react';
import '../styles/PricingList.css';

const PricingList =(props) => {
 console.log(props.currentState)
  return (
    <>
    <h2> Our Pricing</h2>

    <div className={"container"}>
       {props.currentState?
      <div className="card1">
        <h4> Basic :{props.currentState.amount}</h4>
         </div> : null}
          </div>
  </>)
}

export default PricingList;