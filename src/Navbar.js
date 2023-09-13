
import App from "./App";


import './index.css';
import ProfilePage from "./ProfilePage.js";
import ReactDOM  from "react-dom";

import logo from './images/logo.png';
import notification from './images/notification.png';
import inbox from './images/inbox.png';
import video from './images/video.png';
import search from './images/search.png';
import profilePic from './images/profile-pic.png';



import feedBack from "./images/feedback.png";
import Arrow from "./images/arrow.png";
import Help from "./images/help.png";
import Setting from "./images/setting.png";
import Display from "./images/display.png";
import Logout from "./images/logout.png";
import React,{useState} from 'react';

/*
var settingMenu= document.querySelector(".setting-menu");
function settingToggleMenu(){
    settingMenu.classList.toggle(".setting-menu-height")
}*/



 const Navbar = (props) =>{
    const [isMenuHeight, setIsMenuHeight] = useState(false);
    const toggleClass = () => {
      setIsMenuHeight(!isMenuHeight);
    };
    function handleClick() {
        ReactDOM.render(<ProfilePage/>, document.getElementById('root'));
      }
      function backClick(){
        ReactDOM.render(<App/>,document.getElementById('root'));
      }

     /*const [isDarkTheme, setIsDarkTheme] = useState(false);
      const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
      };*/


  return(
  <nav>
  <div className="nav-left">
      <img src={logo} alt="logo" className="logo" onClick={backClick}/>
      <ul>
          <li><img src={notification} alt="notification"/></li>
          <li><img src={inbox} alt="inbox"/></li>
          <li><img src={video} alt="video"/></li>
      </ul>
  </div>
  
  <div className="nav-right">
      <div className="search-box">
          <img src={search} alt="search-img"/>
          <input type="text" placeholder="search"/>
      </div>

      <div className="nav-user-icon online" onClick={toggleClass}>
          <img src={profilePic} alt="profile-pic"/>
      </div>
  </div> 
 

  <div className={isMenuHeight ? 'setting-menu-height' : 'setting-menu'}>
            
            <div id="dark-btn">
               <span onClick={props.doIt}> </span>
            </div>
            
            <div className="setting-menu-inner">
               
               <div className="profile">
                   <img src={profilePic}/>
                 <div>
                  <p>John Nicoles</p>
                  <a href="#" onClick={handleClick}> see your profile</a>
                 </div>
               </div>
               <hr/>
            
               <div className="profile">
                   <img src={feedBack}/>
                 <div>
                  <p>Feedback</p>
                  <a href="#">give feedback to improve site</a>
                 </div>
               </div>
               <hr/>
            
            <div className="setting-links">
               <img src={Setting} className="setting-icon"/>
               <a href="/">settings & privacy</a>
               <img src={Arrow} className="setting-arrow" width="11px"/>
            
            </div>
            
            <div className="setting-links">
               <img src={Help} className="setting-icon"/>
               <a href="#">help & support</a>
               <img src={Arrow} width="11px"/>
            
            </div>
            
            <div className="setting-links">
               <img src={Display} className="setting-icon"/>
               <a href="#">display & accessbility</a>
               <img src={Arrow}width="11px"/>
            
            </div>
            
            <div className="setting-links">
               <img src={Logout} className="setting-icon"/>
               <a href="#">logout</a>
               <img src={Arrow} width="11px"/>
            
            </div>
            
            </div>
            </div>
  
           
            </nav>      

  )
 }
 /*
 document.addEventListener("DOMContentLoaded",() =>{
    var settingsMenu=document.getElementsByClassName("setting-menu");
    var settingsMenuHeight=document.getElementsByClassName("setting-menu-height");
    var UserIcon =document.getElementsByClassName("nav-user-icon online");

    UserIcon.addEventListener("click",()=>{
        settingsMenu.classList.add("setting-menu-height")
    })


 })*/


 export default Navbar