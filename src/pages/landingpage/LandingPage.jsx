import React from 'react'
import './Landingpage.css'

import BgVideo from '../../assets/Videos/hero.mp4'   

import HeroImg from '../../assets/Images/hero-section-image.jpg'




import Box1img from '../../assets/Images/box1-img.png'







import Box2img from '../../assets/Images/box-2-img.png'
import Box3img from '../../assets/Images/box3.png'
import Box4img from '../../assets/Images/box-4-img.png'


// import SampleVideo from '../../assets/Videos/wavess.webm'
import SampleVideo from '../../assets/Videos/wavess.webm'


import BgVideo2 from '../../assets/Videos/waves.mp4'
import Item1 from '../../assets/Images/item1.png'



import Feature1 from '../../assets/Images/feature1.jpeg'
import Feature2 from '../../assets/Images/feature2.jpeg'
import Feature3 from '../../assets/Images/feature3.jpeg'
import Feature4 from '../../assets/Images/feature4.jpeg'
import Feature5 from '../../assets/Images/Feature5.jpeg'
import Feature6 from '../../assets/Images/Feature6.jpeg'

import Lastimg from '../../assets/Images/huly-web-png.png'





export default function Landingpage() {


    return (
    <div>
            {/* <!-- Background video------------ --> */}
        {/* <video 
        src={BgVideo}
        loop
        autoPlay
        muted
        playsInline ></video> */}
        {/* <!-- -----------------Main Content---------------- --> */}
    <div className="main">
        <div className="content">
            <h1>Everything App <br />for your teams</h1>
            <p>Huly, an open-source platform, serves as an all-in-one <br /> replacement of Linear, Jira, Slack, and Notion.</p>
            <h4>TRY IT FREE</h4>
            <img src= {HeroImg}  alt="" srcSet="" />
            <h3>Everything you need for productive team work:</h3>
            <h5 className="white-bold">Team Planner - Project Management - Virtual Office - Chat - Document -Inbox</h5>
        </div>
    </div>
        {/* ===============Section 2 ================= */}
    <div className="section2">
                    <p className="topline">Unmatched Productivity</p>
                    <p class="line2">Huly is a process, project, time, and knowledge management platform that provides collaboration opportunities for developers and product teams alike.</p>
                            {/* -- -----------Boxes--------------- --> */}
        <div className="box">
            <div className="box1">
                <img src= {Box1img} alt="" />
                <h2> <span/>Keyboard shortcuts. <span/> Work efficiently with instant access to common actions.</h2>
            </div>
            <div className="box2">
            <img src= {Box2img} alt="" />
            <h2> <span/>Team Planner. <span/>Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</h2>
            </div>
        </div>
            <div className="box-box">
                <div className="box3">
                <img src= {Box3img} alt="" />
                <h2> <span/>Time blocking. <span/> Transform daily tasks into structured time blocks for focused productivity.</h2>
                </div>
                <div className="box4">
                <h2> <span/>Notification. <span/> Keep up to date with any changes by receiving instant notifications.</h2>
                <video
                    src={SampleVideo}
                    loop
                    autoPlay
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%" }}/>
                    <img src= {Box4img} alt="" />
            </div>
        </div>
    </div>
        {/* -----------Section 3 ---------- */}

        
     
    
    



    {/* --------------------Section 4 --------------- */}
        <div id="Section-4">
                <div id="content">
                    <h1>Sync with GitHub. <br/> Both ways. </h1>
                    <p>Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use Huly as an advanced front-end for GitHub Issues and GitHub Projects.</p>
                    <div id="videobox"></div>
                    {/* <div class="block"></div> */}
                    {/* <div class="box">content inside</div> */}
                    {/* -----------Features - boxes ------------- */}
                    <div id="feature1">
                        <img src= {Feature1} alt=""/>
                        <h2>Two-way <br /> synchronization</h2>
                        <h3>Integrate your task tracker with GitHub to sync changes instantly.</h3>
                    </div>
                    <div id="feature2">
                        <img src= {Feature2} alt=""/>
                        <h2>Private<br/>tasks</h2>
                        <h3>Integration and management of multiple data repositories effectively.</h3>
                    </div>
                    <div id="feature3">
                        <img src= {Feature3} alt=""/>
                        <h2>Multiple <br/> repositories</h2>
                        <h3>Organize multiple projects for more effective planning and collaboration.</h3>
                    </div>
                    <div id="feature4">
                        <img src= {Feature4} alt=""/>
                        <h2>Milestone <br/> migration</h2>
                        <h3>Seamless migration of key project milestones between repositories.</h3>
                    </div>
                    <div id="feature5">
                        <img src= {Feature5} alt=""/>
                        <h2>Track <br/> progress</h2>
                        <h3>Keep track of GitHub contributions and changes within your workspace.</h3>
                    </div>
                    <div id="feature6">
                        <img src= {Feature6} alt=""/>
                        <h2>Advacnced <br/> filtering</h2>
                        <h3>Precise project data search with advanced filtering capabilities.</h3>
                    </div>
                </div>
        </div>
{/* ================================Section 5 =============================== */}
    <div id="Section-5">
        <h1>Huly MetaBrain</h1>
        <h3>Connect every element of your workflow to build a dynamic knowledge base. Soon, Huly AI will turn it into a powerful asset — a second brain for your team.</h3>
        <div class="bentobox">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
            <div class="box4"></div>
            <div class="box5"></div>
            <div class="box6"></div>
            <div class="box7"></div>
        </div>
    </div>
{/* --------------------Section 6 ------------------- */}
<div id="Section-6">
    <div className="parabox">
        <h1>Knowledge at <br /> Your Fingertips.</h1>
        <p>Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.</p>
            <div id="eventbuttons"> </div>

        <p id="eventbox"> 
        <span style={{ color: "#090a0c", fontWeight: 600 }}>
        Documents in Huly </span>can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
        </p>
        <div id= "billboard"> </div>
        <p>With <s> live </s> real-time collaboration, remote teams are able to work together to bring a unified vision to life on the page. Tagging users, linking to issues, and assigning action items are just a few of the <s>advanced </s> <s> solutions </s> <span style={{ color: "rgb(221, 103, 56)" }}>powerful features </span>available within the Huly document editor.</p>
        <div id="codeimg" > </div>

        <p>Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to organize team plans, create technical documentation and support your team's progress towards shared goals.</p> 
        <br />
        <h2 style={{ color:"#090a0cab" }} >Tap here to continue...</h2>
        <br />
        <img src= {Lastimg} alt="" />
    </div>
</div>
            {/* =========================The end wrapper div================== */}
    </div>
    )
}




