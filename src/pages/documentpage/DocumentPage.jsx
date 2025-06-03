import React from 'react'
import './DocumentPage.css'
import HulyLogo from '../../assets/Images/document-huly-logo.svg'
import Slack from '../../assets/Images/slack-brands.svg'
import { AiFillSlackSquare } from "react-icons/ai";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
export default function DocumentPage() {
  return (
    <div>
       <nav className="navbar">
    <div className="left">
      <span className="logo">Huly Docs</span>
      <div className="search-box">
        <IoSearch color='grey' size={20} />
        <input style={{display:"flex", alignItems:"center"}}  type="text" placeholder="Search"/>
        <span className="edit-icon">✎</span>
      </div>
    </div>
    <div className="right">
      <a href="#">Huly.io</a>
      {/* <a href="#"><img src= {GithubLogo} alt="GitHub" class="icon"/></a> */}
      <h1> | </h1>
      <span className="mode-toggle">🌙 Dark ▾</span>
    </div>
  </nav>

        <div className="document-main">
            <div className="left-box">
              <h1>Huly Documentation</h1>
              <p>Open Source All-in-One Project Management Platform</p>
              <br /> <br /> <br /> <br />

              <div  style={{display:"flex", alignItems:"centre", gap:'4rem'}} className="huly-buttons">

              <h4>Get Started</h4> 
              <h4 style={{display:"flex", alignItems:"center", gap:"8px"}} >Back to Huly.io <GoLinkExternal color='#1A1928' /> </h4>
              </div>


            </div>
            <div className="right-box">
            <img src= {HulyLogo} alt="Huly Logo" />
            </div>
        </div>
        <div className="four-boxes">

          <div className="left-boxes">
            <h1>Get to know Huly</h1>
            <div className="left-box-one">
              {/* <img src= {Slack} alt="" /> */}
              
              <h4 style={{display:"flex", alignItems:"center", gap:"8px"}} > <AiFillSlackSquare color='yellow' size={40} /> Join the Community</h4>
              <p>Join our community on <a href="#">Slack</a> to see how others are using the platform, get support and share your own experiences.</p>
            </div>
            <div className="left-box-two">
              <h4 style={{display:"flex", alignItems:"center", gap:"8px"}} > <FaBookOpenReader color='green' size={30}/> Read the docs</h4>
              <p>Learn more about Huly in the <a href="#">Huly Docs.</a></p>
            </div>
          </div>
          <div className="right-boxes">
            <div className="right-box-one">
              <h4 style={{ display:"flex", alignItems:"center", gap:"8px"}} > <FaSquareXTwitter size={30} color='purple'/> Share how your team is using Huly</h4>
              <p>Join the conversation on <a href="#">Twitter/X</a> by sharing how your team is using Huly for better workflow management!</p>
            </div>
            <div className="right-box-two">
              <h4 style={{display:"flex", alignItems:"center", gap:"8px"}} > <FaGithubSquare size={30} color='pink'/> Give Huly a star!</h4>
              <p>Give us a star on <a href="#">GitHub</a> — our team appreciates it!</p>
            </div>
          </div>
        </div>
    </div>
  )
}
