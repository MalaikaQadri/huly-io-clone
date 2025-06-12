import React from 'react'
import './BlogPage.css'

import Topboximg from '../../assets/Images/blog-top-box-img.jpeg'
import Blogbox1img from '../../assets/Images/blog-box1.png'
import Blogbox2img from "../../assets/Images/blog-box2.jpeg"
import Blogbox3img from '../../assets/Images/blog-box3.png'
import Blogbox4img from '../../assets/Images/blog-box4.png'
import Blogbox5img from '../../assets/Images/blog-box5.png'
import Blogbox6img from '../../assets/Images/blog-box6.jpeg'
import Blogbox7img from '../../assets/Images/blog-box7.png'
import Blogbox8img from '../../assets/Images/blog-box8.png'

import Footer from '../../components/footer/footer2/Footer'


export default function BlogPge() {
  return (
    <div>
    
    {/*---------------- Top box-------------- */}
  <div className="top-box">
    <img src= {Topboximg}  alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Products Updates <span>. DEC 13, 2024</span>
    </h4>
    <h2>Meet Hulia: Huly’s first AI assistant</h2>
    <p>
      We're building the Huly MetaBrain, a dynamic "second brain" for your team
      powered by intelligent AI assistants. Take a look at how our first AI
      assistant — Hulia — will help you work more productively.
    </p>
    <a href="">Read more</a>
    
  {/* <div className="line" > </div> */}


  </div>
  {/* ------------line------------- */}

  <div style={{height:"5%", width:"5%", color:"red"}} className="line-after-box" > </div>


        {/* <hr style={{marginLeft: 27% }} /> */}

  {/* -----------------Category Buttons--------------- */}
  {/* <div className="buttons">
    <h4 className="btn1">All Posts</h4>
    <h4 className="btn2" >
      Industry Insights
    </h4>
    <h4 className="btn3">Product Updates</h4>
  </div> */}


  {/* ---------Boxes after Categorey----------- */}


  {/* ---------------Box 1---------------- */}


  <div className="box1">
    <img src= {Blogbox1img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Products Updates <span>. OCT 29, 2024</span>
    </h4>
    <h2>
      Beyond the Cloud: How Huly is Building the First Blockchain-Powered Global
      Collaboration Network
    </h2>
    <p>
      Huly has a bold vision to eliminate organizational barriers and create a
      powerful global collaboration network. Moving beyond traditional cloud and
      self-hosted options, Huly introduces "Global Huly" – a transformative
      platform set to redefine workplace dynamics across boundaries. With plans
      for...
    </p>
    <a href="#">Read more</a>
  </div>



  {/*------------------------- Box 2--------------------- */}
  <div className="box2">
    <img src= {Blogbox2img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Products Updates <span>. AUG 21, 2024</span>
    </h4>
    <h2>
      Thinking outside the box: How a digital marketing agency uses Huly to stay
      organized with client projects
    </h2>
    <p>A conversation with Ryan Luttrell, CEO and founder of Outside the Box</p>
    <a href="#">Read more</a>
  </div>



  {/* ----------------   Box 3 ---------------- */}
  <div className="box3">
    <img src= {Blogbox3img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. AUG 17, 2024</span>
    </h4>
    <h2>AI: The Future of Venture Capital</h2>
    <p>
      AI is transforming venture capital faster than we think. From analyzing
      startup potential to eliminating bias, AI can outperform human investors
      in making data-driven decisions. Is the future of investment in the hands
      of machines? Dive into how Huly's experience with AI investors is
      reshaping the game.
    </p>
    <a href="#">Read more</a>
  </div>


  {/* -------------Box 4------------------- */}
  <div className="box4">
    <img src= {Blogbox4img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. AUG 16, 2024</span>
    </h4>
    <h2>About Software Engineers and Technology Users</h2>
    <p>
      After being away from hiring software engineers for 10 years, I came back
      last year to find the market in chaos. The trend of software "eating the
      world" seems to have now reached its peak, revealing a basic problem in
      how we label jobs in the industry.
    </p>
    <a href="#">Read more</a>
  </div>


  {/* ------------Box 5--------------------- */}
  <div className="box5">
    <img src= {Blogbox5img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. AUG 13, 2024</span>
    </h4>
    <h2>
      Beyond software: How a 3D printing startup uses Huly for hardware
      engineering workflows
    </h2>
    <p>Behind the scenes with Andreas Zapfl, CEO and co-founder of Toucan3D</p>
    <a href="#">Read more</a>
  </div>



  {/* -------------Box 6------------------ */}
  <div className="box6">
    <img src= {Blogbox6img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. APR 17, 2024</span>
    </h4>
    <h2>Capturing dynamic team workflows with Action Items</h2>
    <p>
      Huly reduces blind spots and eliminates redundancies with its dynamic
      approach to complex team workflows
    </p>
    <a href="#">Read more</a>
  </div>




  {/* -----------------Box 7 --------------- */}
  <div className="box7">
    <img src= {Blogbox7img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. APR 10, 2024</span>
    </h4>
    <h2>Source Code is Poison</h2>
    <p>
      Many people believe that source code is an asset. It is not. I'm not the
      first to suggest this idea; there are numerous articles on the internet
      asserting that source code is not an asset -- it's a liability. However, I
      want to take this a step further and say that source code is not just a
      liability -- it's poison
    </p>
    <a href="#">Read more</a>
  </div>




  {/* -----------------Box 8--------------- */}
  <div className="box8">
    <img src= {Blogbox8img} alt="Box Image" />
    <h4 style={{ color: "rgba(216, 113, 75, 0.911)" }}>
      Industry Insights <span>. APR 10, 2024</span>
    </h4>
    <h2>Zed and AI will save us millions</h2>
    <p>...and you might soon lose your job</p>
    <a href="#">Read more</a>
    {/* <h1>isudhwsdfiuhwgiudsujhdi</h1> */}
  </div>


  {/* ===============Footer========= */}
  
        <Footer/>

        <br />

    </div>
  )
}
