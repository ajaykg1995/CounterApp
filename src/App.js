import {useState} from 'react'
import './App.css'

function App() {

const [counter,setCount] = useState(0)
function countInc()
{
  setCount(counter+1)
}
const countDec=()=>{
  if (counter!==0) 
  {   
    setCount(counter-1)
  }
}

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="count">
      <div className="left">
      <button className="fas fa-trash" onClick={countDec}></button> 
       </div>
       <div>   <h1>{counter}</h1> </div>
       <div className="right"><button className="fas fa-plus" onClick={countInc}></button></div>
       </div>
    </div>
  );
}
export default App;
