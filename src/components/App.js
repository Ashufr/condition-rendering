import React from "react";
import Header from "./Header";
import Form from "./Form";

var userIsregisterd = false;

function App() {
  return (
    <div className="container">
      <Header />
      <Form status={userIsregisterd}/>
    </div>
  );
}

export default App;
