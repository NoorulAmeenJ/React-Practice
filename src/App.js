import logo from "./logo.svg";
import "./App.css";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const data = [
  {
    name: "Noorul",
    company: "Profinch",
  },
  {
    name: "Shanmu",
    company: "Wipro",
  },
  {
    name: "Nirmal",
    company: "Ashok",
  },
];

function App() {
  const [cart, setCart] = useState(data);

  return (
    <div className="App">
      {data.map((item, id) => (
        <SampleCard key={id} name={item.name} company={item.company} />
      ))}
      <div>cart {cart.length}</div>
    </div>
  );
}

export default App;
// for function small 1st letter
// for component capital 1st letter

function SampleCard(props) {
  var [count, setCount] = useState(2);
  let [show, setShow] = useState(false);
  //var count = 0
  function button() {
    count++;
    setCount(count);
    setShow(!show);
    
  }
  return (
    <div className="box" style={{ backgroundColor: props.clr }}>
      {show ? (<p id="style">Cards : {props.name}</p>) : (<p id="nonstyle">Cards : {props.name}</p>)}
    
      {show ? <p> Cards-details : {props.company}</p> : " "}
      <p>{count}</p>
      <button id="btn" onClick={() => button()}>Button</button>
    </div>
  );
}
