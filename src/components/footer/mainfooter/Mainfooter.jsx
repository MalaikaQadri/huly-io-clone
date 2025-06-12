import React from 'react'
import './Mainfooter.css'
import SlackColorLogo from '../../../assets/Images/Slack-color-img.png'
import ClockVideo from '../../../assets/Videos/clock.webm'
import { SiSlack } from "react-icons/si";

export default function Mainfooter() {
    return (
<div>

<div class="footer">
    <div className="clock">
         <video 
                src={ClockVideo}
                loop
                autoPlay
                muted
                playsInline ></video>
    </div>
            <div class="footer-box">
                <h2>Join the <br/>Movement</h2> <br/>
                <p>Unlock the future of productivity with Huly.
            Remember, this journey is just getting started.</p>

             <h4 class="btn1">START NOW</h4>
            <h4 style={{display:"flex", gap:"5px"}} class="btn2"> <SiSlack  /> JOIN OUR SLACK</h4>
            


            </div>
    </div>
</div>
    )
}
