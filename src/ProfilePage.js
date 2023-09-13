
import './index.css';
import React,{useState} from 'react';
import Navbar from "./Navbar.js";
import ReactDOM  from 'react-dom';

import Member1 from "./images/member-1.png";
import Member2 from "./images/member-2.png";
import Member3 from "./images/member-3.png";
import Member4 from "./images/member-4.png";
import Member5 from "./images/member-5.png";
import Member6 from "./images/member-6.png";
import Member7 from "./images/member-7.png";
import Member8 from "./images/member-8.png";
import Member9 from "./images/member-9.png";
import Cover from "./images/cover.png";
import Profile from "./images/profile.png";
import AddFriend from "./images/add-friends.png";
import Message from "./images/message.png";
import More from "./images/more.png";
import Feeling from "./images/feeling.png";
import ProfileJob from "./images/profile-job.png";
import ProfileStudy from "./images/profile-study.png";
import ProfileLocation from "./images/profile-location.png";
import ProfileHome from "./images/profile-home.png";
import Photo1 from "./images/photo1.png";
import Photo2 from "./images/photo2.png";
import Photo3 from "./images/photo3.png";
import Photo4 from "./images/photo4.png";
import Photo5 from "./images/photo5.png";
import Photo6 from "./images/photo6.png";
import Photo from "./images/photo.png";
import ProfilePic from "./images/profile-pic.png";
import LiveVideo from "./images/live-video.png";
import LikeBlue from "./images/like-blue.png";
import Comments from "./images/comments.png";
import Share from "./images/share.png";
import FeedImage1 from "./images/feed-image-1.png";
import FeedImage2 from "./images/feed-image-2.png";
import FeedImage3 from "./images/feed-image-3.png";
import FeedImage4 from "./images/feed-image-4.png";



const ProfilePage= () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
      const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
      }
   
 return(
    
<div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>

    <div className='body'>
   <Navbar doIt={toggleTheme}/>,
  

<div className="profile-container">
<img src={Cover} className="cover-img"/>
<div className="profile-details">
    <div className="pd-left">
        <div className="pd-row">
            <img src={Profile} />
            <div>
                <h3>John Nicoles</h3>
                <p>120 friends - 20 mutual</p>
                <img src={Member1} className="mutual-fr-img"/>
                <img src={Member2} className="mutual-fr-img"/>
                <img src={Member3} className="mutual-fr-img"/>
                <img src={Member4} className="mutual-fr-img"/>
            </div>
            
        </div>
    </div>
    <div className="pd-right">
        <button><img src={AddFriend}/>Friends</button>
        <button><img src={Message}/>message</button>
        <br/>
        <a href="#"><img src={More}/></a>
    </div>

</div>

<div className="profile-info">
    <div className="info-col">
        <div className="profile-intro">
            <h4>intro</h4>
            <p className="profile-text">Belive in yourself you can do awesome things <img src={Feeling}/></p>
            <ul>
                <li><img src={ProfileJob}/>Director of Design99 Ltd</li>
                <li><img src={ProfileStudy}/>Studied at Oxford university</li>
                <li><img src={ProfileStudy}/>Went to Mellowbrook</li>
                <li><img src={ProfileHome}/>Lives in Florida</li>
                <li><img src={ProfileLocation}/>From Las vegas,us</li>
            </ul>
        </div>

        <div className="profile-intro">
            <div className="title-box">
                <h4>Photos</h4>
                <a href="#">all photos</a>
            </div>
            <div className="photo-box">
               <div> <img src={Photo1} /></div>
               <div> <img src={Photo2} /></div>
               <div> <img src={Photo3} /></div>
               <div> <img src={Photo4} /></div>
               <div> <img src={Photo5} /></div>
               <div> <img src={Photo6} /></div>

                
            </div>
        </div>
        
        <div className="profile-intro">
            <div className="title-box">
                <h4>Friends</h4> 
                <a href="#">all friends</a>
                
            </div>
            <p>120 (10 mutual)</p>
            <div className="friend-box">
               <div> <img src={Member1} /><p>Rebecca</p></div>
               <div> <img src={Member2} /><p>Sanji</p></div>
               <div> <img src={Member3}/><p>Robin</p></div>
               <div> <img src={Member4} /><p>Zoro</p></div>
               <div> <img src={Member5} /><p>Chopper</p></div>
               <div> <img src={Member6} /><p>Nami</p></div>
               <div> <img src={Member7} /><p>Usoopp</p></div>
               <div> <img src={Member8} /><p>Viola</p></div>
               <div> <img src={Member9} /><p>Luffy</p></div>


                
            </div>
        </div>
        
    </div>


    <div className="post-col">
 
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
           <small>13/06/2023  12:40</small>
       </div>
       <i  id="post-option" className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="post-text">
      <p> hi, this is socialbook our new web project and this my first post 
       please support our web page <a href="#">#SocialBook </a>,<a href="#"> #Webdesign</a></p>
   </div>
   <img className="post-pic" src={FeedImage2}/>
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
           <small>13/06/2023  12:40</small>
       </div>
       <i  id="post-option" className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="post-text">
      <p> hi, this is socialbook our new web project and this my first post 
       please support our web page <a href="#">#SocialBook </a>,<a href="#"> #Webdesign</a></p>
   </div>
   <img className="post-pic" src={FeedImage3}/>
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
           <small>13/06/2023  12:40</small>
       </div>
       <i  id="post-option" className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="post-text">
      <p> hi, this is socialbook our new web project and this my first post 
       please support our web page <a href="#">#SocialBook </a>,<a href="#"> #Webdesign</a></p>
   </div>
   <img className="post-pic" src={FeedImage4}/>
   <div className="post-row">
       <div className="post-icons">
           <div><img src={LikeBlue}/>251</div>
           <div><img src={Comments}/>61</div>
           <div><img src={Share} />23</div>
       </div>
   </div>
</div>


    </div>

</div>


</div>
</div>

</div>



 )

}
export default ProfilePage

