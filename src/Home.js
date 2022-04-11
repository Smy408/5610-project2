import React from 'react'; 
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
import App from "./App";
import Instruction from './Instruction.js';
import './App.css'; 

function Home() {
    return (
        <div>
        <div className="App">
            <Router>
              <nav>
                  
                  <l1>
                  <Link to="/home" className="list">Home</Link>                  
                  </l1>
                  <l1>
                  <Link to="/game/easy" onClick={() => window.location.href="/game/easy"} className="list">EasyGame</Link>                 
                  </l1>
                  <l1>
                  <Link to="/game/medium" onClick={() => window.location.href="/game/medium"} className="list">MediumGame</Link>                 
                  </l1>
                  <l1>
                  <Link to="/game/hard" onClick={() => window.location.href="/game/hard"} className="list">HardGame</Link>                 
                  </l1>
                <l1>
               
                  <Link to="/instruction" className="list">Instruction</Link>
                  </l1>
                  
              </nav>

               <h1>Welcome to Wordle</h1>

              <Routes>
                <Route 
                    exact path="/game/easy"
                    key="easy-game"
                    element={<App /> } 
                />
                <Route 
                    key="medium-game"
                    exact path="/game/medium"
                    element={<App /> }
                />
                <Route  
                    key="hard-game"
                    exact path="/game/hard"
                    element={<App /> }
                />
                  
                <Route path="/instruction" element={<Instruction />} />
              </Routes>
            
            
            </Router>

          </div>

        </div>
   


    ); 
}

export default Home; 