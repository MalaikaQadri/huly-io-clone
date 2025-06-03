import React from 'react'
import './Downloadpage.css'
import Navbar from '../../components/navbar/Navbar'
// import Footer from '../../components/Footer'
import Logoimg from '../../assets/Images/huly-download-logo.png'
import Footer from '../../components/footer/footer2/Footer'

export default function Downloadpage() {



return (
    <div>
    {/* ----------------------Nav bar ----------------------- */}

    {/* <Navbar/> */}
    
    

    {/* ----------------Main Content ----------------------- */}

    <div className="box">
    <div id="img-box">
    <img src= {Logoimg} alt="Logo Image" />
    </div>
    <div className="boxes boxes-1" />
    <div className="boxes boxes-2" />
    <h1>All you need in one place</h1> <br />
    <h2>
    Easily access online or on macOS, Windows, and Linux. Boost your
    productivity on any platform.
    </h2>{" "}


    <br />


    <div className="button">
        <p>DOWNLOAD FOR WINDOWS</p>
    </div>


    <ul>
    <li><a href="#">Download for macOS (Intel) | </a></li>
    <li><a href="#">Download for macOS (Apple) | </a></li>
    <li><a href="#">Download for Linux | </a></li>
    <li><a href="#">Web Application</a></li>
    </ul>
    </div> <br /><br /> 
        <Footer/>
        <br />

    </div>
)
}
