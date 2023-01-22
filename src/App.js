import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div className="App">
        <SampleCard/>
        <SampleCard/>
        <SampleCard/>

       </div>
  );
}

export default App;


// for function small 1st letter 
// for component capital 1st letter 
 function SampleCard() {
  return(
    <div>
      <h1>Cards</h1>
      <h1>Cards-details</h1>
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