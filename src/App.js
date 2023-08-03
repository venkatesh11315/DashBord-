
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slidenavabar from './compounds/Slidenavabar';
import Home from './compounds/Home';
import { useState } from 'react';
import Navabar from './compounds/Navabar';


function App() {
  const [toggle,setToggle]=useState(true);
  const Toggle =() => {
setToggle(!toggle)
  }
  return (
    
    <div className="container-fulid">
         <div className='row'>
         {toggle&& 
          <div className="col-2">
         
           <Navabar/>
          
          </div> }
          
     < div className='col'>
      <Home  Toggle={Toggle}/>
    
      </div>    
     
         </div>
     
   
    </div>
  );
}

export default App;
