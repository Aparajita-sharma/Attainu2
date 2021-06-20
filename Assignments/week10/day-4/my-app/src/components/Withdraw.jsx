import React from 'react'
import {connect} from 'react-redux'
import {withdrow_500, } from '../redux';

const Withdrow = (props) => {
  return (
    <div>
      <h2>{props.users}</h2>
      <button onClick={props.withdrow_500}>Withdrow 500</button>
      <button>Withdrow 1000</button>
    </div>
  )
}
 const mapStateToProps = state =>{
   return {
    users : state.users
   }
 }

 const mapDispatchToProps = dispatch=>{
   return{
  withdrow_500 :() =>(dispatch(withdrow_500))
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Withdrow);