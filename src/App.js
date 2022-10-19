import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Bikes from "./Components/BikeData/Bikes";
import Navbar from "./Navbar/Navbar";
import "./App.css";


let App=()=>{

    return <Router>
        <div className='App'>
        <Navbar/>
        </div> 
        <Routes>
            <Route exact path="/" element={<Bikes/>}/>
                    
        </Routes>
    </Router>
}
export default App
