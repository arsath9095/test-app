import React from "react";
import './index.css';
import News from './images/news.png';
import Friends from './images/friends.png';
import Group from './images/group.png';
import Marketplace from './images/marketplace.png';
import Watch from './images/watch.png';
import Shortcut1 from './images/shortcut-1.png';
import Shortcut2 from './images/shortcut-2.png';
import Shortcut3 from './images/shortcut-3.png';
import Shortcut4 from './images/shortcut-4.png';

const LeftPath =() => {
return(

<div className="left-path">
            <div className="imp-links">
                <a href="/"><img src={News} alt="news"/>News</a>
                <a href="/"><img src={Friends}alt="friends"/>Friends</a>
                <a href="/"><img src={Group} alt="group"/>Group</a>
                <a href="/"><img src={Marketplace} alt="marketplace"/>Marketplace</a>
                <a href="/"><img src={Watch} alt="watch"/>Watch</a>
                <a href="/">See more</a>
            </div>
            <div className="shortcuts">
                <p>Your Shortcuts</p>
                <a href="/"><img src={Shortcut1} alt="shortcut1"/>web developer</a>
                <a href="/"><img src={Shortcut2} alt="shortcut2"/>web devlopment</a>
                <a href="/"><img src={Shortcut3} alt="shortcut3"/>fullstack developer</a>
                <a href="/"><img src={Shortcut4} alt="shortcut4"/>frontend developer</a>
            </div>

        </div>
)

};
export default LeftPath