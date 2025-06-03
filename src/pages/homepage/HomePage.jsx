import React, { useState } from 'react'
import './HomePage.css'
import { FaArrowRightLong } from "react-icons/fa6";
import BgVideo from '../../assets/Videos/hero.mp4'
import HeroImg from '../../assets/Images/hero-section-image.jpg'
import HeroBgImg1 from '../../assets/Images/hero-bg1.svg'
import HeroBgImg2 from '../../assets/Images/hero-bg-2.svg'

import Box1img from '../../assets/Images/box1-img.png'
import Box2img from '../../assets/Images/box-2-img.png'
import Box3img from '../../assets/Images/box3.png'  
import Box4img from '../../assets/Images/box-4-img.png'
import Defaultimg from '../../assets/Images/default.png'
import SampleVideo from '../../assets/Videos/wavess.webm'


import BgVideo2 from '../../assets/Videos/waves.mp4'
import SsVideo from '../../assets/Videos/ss-video.mp4'
import Item1 from '../../assets/Images/item1.png'
import Item2 from '../../assets/Images/item2.png'
import Item3 from '../../assets/Images/item3.png'


import Feature1 from '../../assets/Images/feature1.jpeg'
import Feature2 from '../../assets/Images/feature2.jpeg'
import Feature3 from '../../assets/Images/feature3.jpeg'
import Feature4 from '../../assets/Images/feature4.jpeg'
import Feature5 from '../../assets/Images/feature5.jpeg'
import Feature6 from '../../assets/Images/feature6.jpeg'
import BillBoardImg from '../../assets/Images/billboard-img.jpg'
import CodeImg from '../../assets/Images/code-img.png'
import CircleImg1 from '../../assets/Images/Group1.png'
import CircleImg2 from '../../assets/Images/Group2.png'
import Lastimg from '../../assets/Images/huly-web-png.png'
import Footer from '../../components/footer/footer2/Footer'
import Mainfooter from '../../components/footer/mainfooter/Mainfooter'
import VideoSsone from '../../assets/Images/Screenshot-github-1.png'
import VideoSstwo from '../../assets/Images/Video-ss.png'

import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaAt } from "react-icons/fa6";

import { TbBulb } from "react-icons/tb";
import { RxStrikethrough } from "react-icons/rx";
export default function Homepage() {
    const [isBold, setisBold] = useState(false);

    const handleClick = () =>{
        setisBold(prev =>!prev);
    }

// export default function Landingpage() {


    return (
    <div>

            {/* <!-- Background video------------ --> */}
    
        <video 
        src={BgVideo}
        loop
        autoPlay
        muted
        playsInline ></video>

            {/* ++++++++++++=Nav bar +++++++++++++++ */}

        {/* <Navbar/> */}

        {/* <!-- -----------------Main Content---------------- --> */}
    <div className="section1-main">

                <img className='bg-hover-img' src= {HeroBgImg2} alt="" />
                <img className='bg-hover-img' src= {HeroBgImg1} alt="" />
        <div className="section1-content">

        <h1>Everything App <br />for your teams</h1>
        <p>Huly, an open-source platform, serves as an all-in-one <br /> replacement of Linear, Jira, Slack, and Notion.</p>
        <h4>TRY IT FREE   <FaArrowRightLong size={15} /> </h4>
        <img src= {HeroImg}  alt="" srcSet="" />
        <h3>Everything you need for productive team work:</h3>
        <h5 className="white-bold">
        Team Planner - Project Management - Virtual Office - Chat - Document -
        Inbox</h5>
        </div>
    </div>



        {/* ===============Section 2 ================= */}

            <div className="section2">
                    <p className="topline">Unmatched Productivity</p>
                            <p class="line2">Huly is a process, project, time, and knowledge management platform that provides collaboration opportunities for developers and product teams alike.</p>
                            
                            {/* -- -----------Boxes--------------- --> */}
                            
                            <div className="section2-box">
                                <div className="section2-box1">
                                    <img src= {Box1img} alt="" />
                                    <h2> <span/>Keyboard shortcuts. <span/> Work efficiently with instant access to common actions.</h2>
                                </div>
                                <div className="section2-box2">
                                    <img src= {Box2img} alt="" />
                                    <h2> <span/>Team Planner. <span/>Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</h2>
                                </div>
                            </div>
                            <div className="section2-box-box">
                                <div className="section2-box3">
                                <img src= {Box3img} alt="" />
                                <h2> <span/>Time blocking. <span/> Transform daily tasks into structured time blocks for focused productivity.
            
            </h2>
                </div>
                <div className="section2-box4">
                <h2> <span/>Notification. <span/> Keep up to date with any changes by receiving instant notifications.</h2>
                <video
        src={SampleVideo}
        loop
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "100%" }}
      />
                    <img src= {Box4img} alt="" />
                </div>
            </div>
        </div>


        {/* -----------Section 3 ---------- */}
        
  <div id="Section-3">
    {/* <div className="box5"></div> */}
    <div className="container">
       <video
        autoPlay
        loop
        muted
        id="video"
        src= {BgVideo2}
      /> 
      <div id="video-ss" > 
        <video
        autoPlay
        loop
        muted
        id="video"
        src= {SsVideo}
      />
         </div>
      <h3>
        Work Together. <br /> Like in the office.{" "}
      </h3>
      <h4>
        Create customized virtual office spaces for any department or event{" "}
        <br /> with high quality audio and video conferencing.
      </h4>
      <p>
        Collaborating with remote teams is easy in your virtual office <br />{" "}
        environment. Enjoy real-time communication within your <br /> workspace
        without additional software hassle.
      </p>{" "}
    </div>
  </div>
  <div className="three-boxes">
    <div className="three-box1">
        <img src= {Item1} alt="" /> <br />
        <h4>
          Customize <br /> workspace
        </h4> <br />
        <h5>
          Create your own offices and meeting rooms to suit your team's needs.
        </h5>
    </div>
{/* -------------- */}
        <div className="three-box2">
            <img src= {Item2} alt="" /> <br />
            <h4>
          Audio and <br /> video calls
        </h4> <br />
        <h5>
          Collaborate efficiently and seamlessly with high quality virtual
          conferencing.
        </h5>
        </div>
        {/* -==---------=-========== */}
            <div className="three-box3">
                <img src={Item3} alt="" /> <br />
                    <h4>Invite <br /> guests</h4> <br />
                <h5>Meet with guests without ever needing to leave your workspace.</h5>
            </div>
  </div>
      

{/* ==================== */}


    {/* --------------------Section 4 --------------- */}

    {/* <div className="three-boxes"></div> */}
        <div id="Section-4">

                <div id="content">
                    <h1>Sync with GitHub. <br/> Both ways. </h1>
                    <p>Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use Huly as an advanced front-end for GitHub Issues and GitHub Projects.</p>
                    <div id="videobox">
                        <img src={VideoSsone} alt="Image 1" className="fade-img img1" /> 
                        <img src={VideoSstwo} alt="Image 1" className="fade-img img2" /> 
                         {/* <img src={VideoSsone} alt="Image 1" className="fade-img img1" /> */}
                        {/* <img src={fade2} alt="Image 2" className="fade-img img2" />  */}
                    </div>

        

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
        <div class="bento-box1">
            <h2> <span>Create tasks.</span> Schedule your personal events and todos.</h2>
        </div>
        <div class="bento-box2">
            <h2> <span>Plan your work.</span> Visualize your workday in your planner.</h2>
        </div>
        <div class="bento-box3"> </div>

        <div class="bento-box4">
                        <h2><span>Chat with team.</span> Send DM and create group chats.</h2>
       
        </div>
        <div class="bento-box5">
            <img src= {Defaultimg } alt="" />
                <h2><span>Take notes.</span> <br /> 
                Create documents to keep track of team resources</h2>
        </div>
        <div class="bento-box6">
            <h2> <span>Sync in real time. </span> Connect with your team instantly to monitor progress and track updates.</h2>
        </div>
        <div class="bento-box7">
            <h2><span>Manage projects.</span> Customize your workspace to fit the needs of your teams.</h2>
        </div>
        

    </div>

    
</div>


{/* --------------------Section 6 ------------------- */}
<div id="Section-6">
    <div className="animated-box">
        {/* <h1>RThis is h1</h1> */}
    </div>
    <div className="parabox">
    <h1>
        Knowledge at <br />Your Fingertips<img className='CircleImgOne' src= {CircleImg1} alt="" />
    </h1>
    <p>
        Huly offers a wide range of features to create and manage your project
        documentation. Huly's suite of collaborative editing tools boosts team efficiency.
    </p>
    <div id="eventbuttons"> 
        <div className="eve-box1">
            {/* <p>Link</p> */}
            <h6> + Link</h6>
        </div> 
        <div className="eve-box2">
            <h3 onClick={handleClick} ><FaBold style={{height:"20px"}} /></h3>
        </div>
        <div className="eve-box3">
            <h3>
                <i onClick={handleClick} >  <FaItalic style={{height:"20px"}} /> </i>
            </h3>
        </div>
        <div className="eve-box4">
           <h3> <FaUnderline size={20} />
            </h3> 
        </div>
        <div className="eve-box5">
                <RxStrikethrough style={{height:"40px"}} size={30} color='grey'/>
        </div>
        <div className="eve-box6">
            <h3> <FaAt size={30} color='grey' /> </h3>
        </div>
        <div className="eve-box7">
            <TbBulb size={40} color='grey' />
        </div>
        </div>

    <p  id="eventbox"> 
        <span style={{ color: "#090a0c", fontWeight: isBold ? "bold" : "normal"  }}/>
        Documents in Huly can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
    </p> <br/>


    <div id= "billboard"> 
        <img style={{height:"100%"}} src= {BillBoardImg} alt="" />
    </div>

    <p>With <s> live </s> real-time collaboration, remote teams are able to work together to bring a unified vision to life on the page. Tagging users, linking to issues, and assigning action items are just a few of the <s style={{color: "grey"}} >advanced </s> <s style={{color: "grey"}} > solutions </s> <span style={{ color: "rgb(221, 103, 56)" }}>powerful features <img className='CircleImgTwo' src= {CircleImg2} alt="" /> </span>available within the Huly document editor.</p>

    

<br />
            <div id="img-code-1">

                <img style={{ height:"40%", width:"100%"  }}  src= {CodeImg} alt="" />
            </div>

            <p>Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to organize team plans, create technical documentation and support your team's progress towards shared goals.</p> 
    <br /> 


    <h2 style={{ color:"#090a0cab" }} >Tap here to continue...</h2>
    <br />
    <img src= {Lastimg} alt="" />

  </div>
</div>
                <Mainfooter/>
            <Footer/>

            {/* =========================The end wrapper div================== */}
    </div>






    )
}
