import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const HelpForm = ()=> (
<form>
  <Button />
  <InputField type="password" number={[1,2,3,4]}/>
  <InputField type="number" number={12} />
  <Button type="submit" background="pink" value="Submit" />
  <Button type="button" background="blue" value="click me" />
</form>
);
export default HelpForm;
