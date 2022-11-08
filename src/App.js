import "./styles.css";
import  { ChildPropsA }  from "./components/ChildPropsA"
import  { ChildPropsB }  from "./components/ChildPropsB"
import React, { useState } from "react"

export default function App() {
  const [ fromUser , setFromUser ] = useState('aaa')
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ChildPropsA fromUser={fromUser} setFromUser={setFromUser}/>
      <ChildPropsB fromUser={fromUser} setFromUser={setFromUser}/>
      {fromUser}
    </div>
  );
}
