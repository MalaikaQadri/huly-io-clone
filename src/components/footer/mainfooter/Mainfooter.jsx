import React from 'react'
import './Mainfooter.css'
import SlackColorLogo from '../../../assets/Images/Slack-color-img.png'
import ClockVideo from '../../../assets/Videos/clock.webm'

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
                <h2>Join the <br/>Movement</h2>
                <p>Unlock the future of productivity with Huly.
            Remember, this journey is just getting started.</p>

             <h4 class="btn1">START NOW</h4>
            <h4 class="btn2"> <img src= {SlackColorLogo} alt="Slack-logo"/> JOIN OUR SLACK</h4>
            
            {/* <div class="buttonss">
            <h4 class="btn1">START NOW</h4>
            <h4 class="btn2"> <img src= {SlackColorLogo} alt="Slack-logo"/> JOIN OUR SLACK</h4>
            </div> */}


            </div>
        {/* <div class="buttonss">
            <h4 class="btn1">START NOW</h4>
            <h4 class="btn2"> <img src= {SlackColorLogo} alt="Slack-logo"/> JOIN OUR SLACK</h4>
        </div> */}
    </div>
</div>
    )
}
