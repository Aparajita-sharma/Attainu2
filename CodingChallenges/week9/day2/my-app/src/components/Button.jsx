import React from 'react';
import '../styles/button.css'



const butt = (props) => {
return(
  <button type={props.type} className={"button"}>Submit</button>
)
};

export default butt;