import React from 'react'

const Option = ({isMonthly}) => {
  return (
   <span>
     <p>Annually</p>
     <label className ="switch">
       <input type="checkbox" onClick={isMonthly}/>
       <span className="slider"></span>
     </label>
   </span>
  )
}
export default Option;
