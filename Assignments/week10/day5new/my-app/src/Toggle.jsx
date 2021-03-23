import React from 'react'

const Toggle =(props)=> {
 console.log(props)
 return (
      <div>
        <button onClick={ () => this.handleButton()}>Toggle</button>
        {props.currentSit.Display}
      </div>
    )
 
}
 export default Toggle;