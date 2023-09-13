import React from "react";
import "./index.css";
import Upload from "./images/upload.png";
import Member1 from "./images/member-1.png";
import Member2 from "./images/member-2.png";
import Member3 from "./images/member-3.png";
import Member4 from "./images/member-4.png";
import ProfilePic from "./images/profile-pic.png";
import LiveVideo from "./images/live-video.png";
import Feeling from "./images/feeling.png";
import Photo from "./images/photo.png";
import LikeBlue from "./images/like-blue.png";
import Comments from "./images/comments.png";
import Share from "./images/share.png";
import FeedImage1 from "./images/feed-image-1.png";
import FeedImage2 from "./images/feed-image-2.png";


const MainPath = () =>{
    return(

 

<div className="main-path">

<div className="story-gallery">
       <div className="story story-1">
           <img src={Upload}/>
           <p>Add story</p>
       </div>

       <div className="story story-2">
           <img src={Member1}/>
           <p>Rebecca</p>
       </div>

       <div className="story story-3">
           <img src={Member2}/>
           <p>mitchell</p>
       </div>

       <div className="story story-4">
           <img src={Member3}/>
           <p>Alvida</p>
       </div>

       <div className="story story-5">
           <img src={Member4}/>
           <p>Garp</p>
       </div>
</div>

<div className="write-conntainer">
   <div className="profile">
       <img src={ProfilePic}/>
       <div>
           <p>John Nicoles</p>
           <small>public<i className="fa-solid fa-angle-down"></i></small>
       </div>
   </div>
       <h5>write somethings here ?</h5>
      <input type="text" />

      <div className="write-icons">
       <a href="#"><img src={LiveVideo}/>Live videos</a>
       <a href="#"><img src={Photo}/>Photos/vidoes</a>
       <a href="#"><img src={Feeling}/>Feeling/activity</a>
      </div>
</div>


<div className="post-container">
   <div className="profile">
       <img src={ProfilePic}/>
       <div>
           <p>John Nicoles</p>
           <small>13/06/2023  12:40</small>
       </div>
       <i  id="post-option" className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="post-text">
      <p> hi, this is socialbook our new web project and this my first post 
       please support our web page <a href="#">#SocialBook </a>,<a href="#"> #Webdesign</a></p>
   </div>
   <img className="post-pic" src={FeedImage1}/>
   <div className="post-row">
       <div className="post-icons">
           <div><img src={LikeBlue}/>251</div>
           <div><img src={Comments}/>61</div>
           <div><img src={Share} />23</div>
       </div>
   </div>
</div>


<div className="post-container">
   <div className="profile">
       <img src={ProfilePic}/>
       <div>
           <p>John Nicoles</p>
           <span>31/06/2023  09:40</span>
       </div>
       <i id ="post-option" className="fa-solid fa-ellipsis-vertical" ></i>
   </div>
   <div class="post-text">
      <p> hi, this is socialbook our new web project and this my first post 
       please support our web page <a href="#">#SocialBook </a>,<a href="#"> #Webdesign</a></p>
   </div>
   <img className="post-pic" src={FeedImage2}/>
   <div className="post-row">
       <div className="post-icons">
           <div><img src={LikeBlue}/>251</div>
           <div><img src={Comments}/>61</div>
           <div><img src={Share}/>23</div>
       </div>
   </div>

</div>

    <button class="readmore-btn">Read More</button>

</div>

)
}
export default MainPath