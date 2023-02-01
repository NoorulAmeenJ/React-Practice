import logo from "./logo.svg";
import "./App.css";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { ProductComponent } from "./components/productcomponents";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base/base";
import { StudentDetails } from "./components/student.js";


function App() {
  return (
    <div className="App">
     <Base 
     title = "batch details"
     description= "All student details">
      <StudentDetails/>
     </Base>
    </div>
    
  );
}

export default App;














































































// function App() {
//   // const [cart, setCart] = useState(data);

//   return (
//     <div className="App">
//       {/* {data.map((item, id) => (
//         <SampleCard key={id} name={item.name} company={item.company} />
//       ))}
//       <div>cart {cart.length}</div> */}
//       {/* <CardData/> */}
//     </div>
    
//   );
// }

// export default App;

// const data = [
//   {
//     name: "Noorul",
//     company: "Profinch",
//   },
//   {
//     name: "Shanmu",
//     company: "Wipro",
//   },
//   {
//     name: "Nirmal",
//     company: "Ashok",
//   },
// ];

// // for function small 1st letter
// // for component capital 1st letter

// function SampleCard(props) { 
//   var [count, setCount] = useState(2);
//   let [show, setShow] = useState(false);
//   //var count = 0
//   function button() {
//     count++;
//     setCount(count);
//     setShow(!show);
    
//   }
//   return (
//     <div className="box" style={{ backgroundColor: props.clr }}>
//       {show ? (<p id="style">Cards : {props.name}</p>) : (<p id="nonstyle">Cards : {props.name}</p>)}
    
//       {show ? <p> Cards-details : {props.company}</p> : " "}
//       <p>{count}</p>
//       <button id="btn" onClick={() => button()}>Button</button>
//     </div>
//   );
// }


// const prodData = [
//   {
//     prodName: "Noorul",
//     temp: "abc",
//     price: "$4",
//   },
//   {
//     prodName: "Shanmu",
//     temp: "def",
//     price: "$3",
//   },
//   {
//     prodName: "Nirmal",
//     temp: "ijk",
//     price: "$2",
//   },
//   {
//     prodName: "kiruba",
//     temp: "lmn",
//     price: "$1",
//   },

// ]; 

// function CardData(){
//   var [count, setCount] = useState(0)
//   const [newData, setNewData] = useState(prodData)
//   // console.log(newData)
 

//   const handleAdd = (name,temp) => {
//     setCount(count+1)
//     var tempName = name
//     var tempPrice = temp
//     console.log(tempName,tempPrice)
//     document.getElementById(tempName).disabled = true
//     document.getElementById(tempPrice).disabled = false
//   }
//   const handleRemove = (name,price) => {
//     if(document.getElementById(name).disabled == true){
//      setCount(count-1)
//      var tempName = name
//     var tempPrice = price
//     console.log(tempName,tempPrice)
//      document.getElementById(tempName).disabled = false
//      document.getElementById(tempPrice).disabled = true
//     }
//     }
//   return(
//     <div className="main-sample">
//       <div className="prod-div">
//            {newData.map((prod, idx)=> (
//             <div className="box" key={idx}>
//               <div>Name : {prod.prodName}</div>
//               <div>Price : {prod.price}</div>
//               <button id={prod.prodName} onClick={() => handleAdd(prod.prodName,prod.temp)}>add</button>
//               <button id={prod.temp}  className="btn dlt" onClick={() => handleRemove(prod.prodName,prod.temp)}>remove</button>
//             </div>
            
//            ))}
//       </div>
//       <div className="card-count">
//        cart{count}
//       </div>
      
//     </div>
//   )

// }