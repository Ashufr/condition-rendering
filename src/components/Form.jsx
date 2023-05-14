import React from "react";
import Input from "./Input";
import Submit from "./Submit";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.status  && <Input type="password" placeholder="Confirm Password" /> }
      <Submit status= {props.status}/>
    </form>
  );
}

export default Form;
