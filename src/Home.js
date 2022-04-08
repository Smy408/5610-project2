import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from "./App";
import Instruction from './Instruction.js';
import './App.css'; 

function Home() {
    return (
        <div>
        <div className="App">
            <Router>
              <nav>
                  <h1>Welcome to Wordle</h1>
                  <l1>
                  <Link to="/home" className="list">Home</Link>                  
                  </l1>
                  <l1>
                  <Link to="/App" className="list">EasyGame</Link>                 
                  </l1>
                <l1>
               
                  <Link to="/instruction" className="list">Instruction</Link>
                  </l1>
                  
              </nav>

              <Routes>
            
                  <Route path="/App" element={<App />} />
                  <Route path="/instruction" element={<Instruction />} />
              </Routes>
            
            
            </Router>

          </div>

        </div>
   


    ); 
}

export default Home; 