import React from 'react';
import '../styles/PricingList.css';

const PricingList = ({ currentData }) =>{
  console.log(currentData)
 return(
   <div className={'title'} >
    <div className={'container'}>
      {currentData? (<>
      <div>{currentData.id}</div>
      <hr/>
   <div>{currentData.gb}</div>
<hr/>
   <div>{currentData.amount}</div>
   <hr/>
   <div> {currentData.user}</div>
   <hr/>
   <div>{currentData.send}</div>
   <hr/>
     </> ) : null}
   </div>
   </div>
  );
}

export default PricingList;
