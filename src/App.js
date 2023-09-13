/*
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
<Router>
      <NavLink>
        <Route exact path="/" component={HomePage} />
        <Route path="/ProfilePage" component={ProfilePage} />
        </NavLink>
    </Router>
  );
}

export default App;
*/


//import "./App.css";
import "./index.css";
import "./ProfilePage";
import React,{useState} from 'react';


import Navbar from "./Navbar";
import LeftPath from "./LeftPath";
import MainPath from "./MainPath";
import RightPath from "./RightPath";
import './darkTheme.css';


 
function App (){
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);
      const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
      }
    return(
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        
    <div className= 'body'>
     <Navbar doIt={toggleTheme}/>
      <div className="container">
      
        <LeftPath/>
        <MainPath/>
        <RightPath/>
      </div>
      <p>copyright -2023 Mohamed Arsath Designer</p>
    </div>
     </div>
    )
    }

  export default App;