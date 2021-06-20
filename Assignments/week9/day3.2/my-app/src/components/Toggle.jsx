import React from 'react';
import '../styles/Toggle.css';
const Toggle = ({switchOn= false, onClick}) =>{


const handlecheck=()=>{
   onClick(switchOn);
};


return(
  <div onClick={handlecheck} className={'out'}>
    {switchOn === true ? <div className={'in'} ></div> : null}
  </div>
);
};

export default Toggle ;
