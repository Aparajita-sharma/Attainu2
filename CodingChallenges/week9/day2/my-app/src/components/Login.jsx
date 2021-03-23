import React from 'react';
import Button from './Button';
import Input from './Input'
import '../styles/form.css'

const Login = () => {
return (
<form className={"form"}>


  <div> <Input type={"string"} plc={"Name"}/></div>
<div> <Input type={"password"} pass={"password"}/> </div>

<div> <Button type={"submit"} className={"button"}/></div>

</form>
);
};

export default Login;