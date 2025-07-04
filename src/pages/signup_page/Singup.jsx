import React, { useState } from 'react'
// import Footer from '../../components/footer/footer2/Footer'
import SingupBgvideo from '../../assets/Videos/bg.mp4'
import HulyLogo from '../../assets/Images/get-started-huly-logo.png'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
export default function Signup() {
    const [email, setemail] = useState("")


  return (
    <div>
        <video className='get-started-video'
                          src={SingupBgvideo}
                          loop
                          autoPlay
                          muted
                          playsInline ></video>

                          <div className="get-started">
                          
                <div className="get-started-content">
                  <div className="huly-img-box">
                       {/* Huly logo here applied thriugh CSS  */}
                  </div> <br />
                    <h1>Sign in to Huly</h1> <br />
                    <label id='email-label' htmlFor="email">Email</label> <br />
                    <input className='my-email' type='text' id='email' value={email} placeholder=   '    name@work-email.com'/> <br />
                    <button className='my-create-account-button' >CREATE ACCOUNT </button> <br />

                    <p className='or'> OR </p> <br />
                    <div className='get-started-buttons-two'>
                        <button style={{display:"flex", alignItems:"center", gap:"8px"}} > <AiFillGoogleCircle size={30}/> Sign up with Google</button>
                        <button style={{display:"flex", alignItems:"center", gap:"8px"}} > <FaGithub size={30} /> Sign up with GitHub</button>
                    </div>
                </div>
                <br />

                <h1 className='get-started-account'>Don't have an account ? <span>Sign up</span></h1> 
                <br /> <br /> <br /> 
                <pre> <h1 className='term-use-policy' >Term of Use     |    Privacy Policy</h1> </pre> 

                          {/* <Footer/> */}
                          </div>

    </div>
  )
}
