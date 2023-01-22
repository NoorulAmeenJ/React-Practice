import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
      name: "Noorul",
      company: "Profinch"
    },
    {
      name: "Shanmu",
      company: "Wipro"
    },
    {
      name: "Nirmal",
      company: "Ashok"
    }
  ]
  return ( 
    <div className="App">
      {
        data.map((item,id)=>(
          <SampleCard key={id} name={item.name} company={item.company} />
        ))
      }

       </div>
  );
}
export default App;
// for function small 1st letter 
// for component capital 1st letter 
 function SampleCard(props) {
 
  return(
    <div className="box" style={{backgroundColor:props.clr}} >
      <p>Cards : {props.name}</p>
      <p>Cards-details : {props.company}</p>
    </div>
  )
}




// function SampleCard (props) {

//   const [show, setShow] = useState(false); 
 
//    const handleClick = () =>{
//     setShow(!show)
//    }
 
//    const describeStyle = { 
//      display : show ? "block" :"none" ,
   
//    }
 
 
//    return (
//      <div style={{backgroundColor:props.clr}}className='card-content'>
//        <p>Card name : {props.name}</p>
 
//        {/* conditional rendering */}
//        {/* {show ? <p>Card Details: {props.details}</p> : ""} */}
 
//        {/* conditional styling  */}
//        <p style={describeStyle}>Card Details: {props.details}</p>
//        <button style={{color : show ? "red" : "white"}} onClick={()=>{handleClick()}} >{!show ? "show" : "hide"}</button>
//      </div> 
//    )
//  }