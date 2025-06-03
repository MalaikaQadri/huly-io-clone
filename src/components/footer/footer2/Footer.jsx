import React from 'react'
import './Footer.css'
import Xlogo from '../../../assets/Images/X-grey-logo.png'
import Lilogo from '../../../assets/Images/li-grey-logo.png'
import Gitlogo from '../../../assets/Images/github-grey-logo.png'
import Youtubelogo from '../../../assets/Images/youtube-grey-logo.png'
import Slacklogo from '../../../assets/Images/slack-grey-logo.png'
import Lastlogo from '../../../assets/Images/last-grey-logo.png'
import Heartlogo from '../../../assets/Images/heart-logo.png'

export default function Footer() {
return (
    <div>
        <div id="footer-last-line">
                <h5>Copyright © 2025 Huly Labs. All rights reserved.</h5>
                <h5>Terms of Services</h5>
                <h5>Privacy Policy</h5>
                <ul>
                    <li><a href="#"><img src= {Xlogo} alt="X-Logo" srcset=""/></a></li>
                    <li><a href="#"><img src= {Lilogo} alt="LinkedIn-Logo"/></a></li>
                    <li><a href="#"><img src= {Gitlogo} alt="GitHub-Logo"/></a></li>
                    <li><a href="#"><img src= {Youtubelogo} alt="Youtube-Logo"/></a></li>
                    <li><a href="#"><img src= {Slacklogo} alt="Slack-Logo"/></a></li>
                    <li><a href="#"><img src= {Lastlogo} alt="Logo"/></a></li>
                    <li><a href="#"><img src= {Heartlogo} alt=""/></a></li>
                    <li>Made with passion and Huly</li>
                </ul>
            </div>
    </div>
)
}
