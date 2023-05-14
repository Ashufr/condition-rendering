import React from "react";

function Submit(props) {
  return <button type="submit">{props.status? "Login" : "Register"}</button>;
}

export default Submit