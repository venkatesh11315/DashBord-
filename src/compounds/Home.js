import React from 'react'
// import './nav';
// import Nav from './nav';
import Button from './Button';
import Newcard from './Newcard';
import { Route, Routes} from 'react-router-dom';
import Dashbord from './Dashbord';
import Tables from './Tables';
import Header from './Header';









function Home({Toggle}) {
 
  return (
    
   
    <div>
   
   {/* <Nav Toggle={Toggle}  /> */}
  
   
   <Header/>
   
  
   
   <Routes>
    <Route path="/Dashbord.js" element={<Dashbord/>}>Dashbord</Route>
   <Route path='/Newcard.js' element={<Newcard/>}>Newcard</Route>
   <Route path='/Button.js' element={<Button/>}>Button</Route>
   <Route  path='/Tables.js' element={<Tables/>}>Tables</Route>
  </Routes>
 
  </div>
 
  )
}

export default Home;
