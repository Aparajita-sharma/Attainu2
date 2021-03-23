import React from 'react';

const ReviewUser = (props)=> {
 
  return (
    <div className="card">
    
      <img src={props.currentelement.ProfilePicURL} alt="Hello"/>
      <p>Name: {props.currentelement.Name}</p>
      <p>Email:{props.currentelement.Email}</p>
      <p>Review : {props.currentelement.Review}</p>
      <p>Rating: {props.currentelement.Rating}</p>
      
    </div>
  )
};

export default ReviewUser;