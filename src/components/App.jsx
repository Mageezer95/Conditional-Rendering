import React from "react";
import Login from "./Login";

/*Condition of the Ternary Operator*/
var isLoggedIn = true;

const currentTime = new Date(2023, 6, 6, 13).getHours();

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
