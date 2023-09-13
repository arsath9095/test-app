import React from "react";
import "./index.css";
import Location from "./images/location.png";
import Advertisment from "./images/advertisement.png";
import Member1 from "./images/member-1.png";
import Member2 from "./images/member-2.png";
import Member3 from "./images/member-3.png";

const RightPath = () =>{
    return(


<div className="right-path">
 
 <div className="sidebar-title">
     <h4>Events</h4>
     <a href="#">See more</a>
 </div>

 <div className="events">
     <div className="left-event">
         <h3>18</h3>
         <span>March</span>
     </div>
 <div className="right-event">
     <h4>Social media</h4> 
  <p><i className="fa-sharp fa-solid fa-location-dot"></i><img src={Location}/>Marco tech park</p>
      <a href="#">more info</a>
     </div>
 </div>
  <div className="events">
      <div className="left-event">
         <h3>13</h3>
         <span>June</span>
      </div>
       <div className="right-event">
         <h4>Mobile market</h4>
         <p><i className="fa-sharp fa-solid fa-location-dot"></i><img src={Location}/> Marco tech park</p>
         <a href="#">more info</a>
      </div>

      </div>
   <div className="sidebar-title">
    <h4>Advertisment</h4>
    <a href="#">hide</a>
   </div>
   <img src={Advertisment} className="ad-img"/>


   <div className="sidebar-title">
     <h4>Conversaton</h4>
     <a href="#">Hide chat</a>
    </div>

    <div className="online-chat">
     <div className="online">
         <img src={Member1}/>
     </div>
     <p>Rebecca</p>
    </div>

    <div className="online-chat">
     <div className="online">
         <img src={Member2}/>
     </div>
     <p>mitchell</p>
    </div>

    <div className="online-chat">
     <div className="online">
         <img src={Member3}/>
     </div>
     <p>Alvida</p>
    </div>
</div>

)
}

export default RightPath