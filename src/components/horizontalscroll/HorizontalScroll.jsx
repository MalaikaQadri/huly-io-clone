import React, { useRef } from 'react'
import './HorizontalScroll.css'
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target:targetRef })
    
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-150%'])
  return (
    <div>
      {/* <div className="start-div">
        <h1>Start div</h1>
      </div> */}
<div className="carousel" ref={targetRef} >
    <div className="contentContainer">

                <motion.div id="carousel-card1" style={{x}} >
                    <div className="card1-container">
                        <div id="card-one">
                            <h3>Common</h3>
                            <h4>For individuals and teams getting started with Huly.</h4> <br/>
                            <hr/> <br/>
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited users </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited Huly Objects </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   10GB Storage per Workspace </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   10GB Video/Audio Traffic </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                    </div>
                </motion.div>

                        <motion.div id="carousel-card2" style={{x}} >
                        <div className="card2-container">
                            <h3>Rare</h3>
                            <h4>For individual creatives, freelancers, and micro-agencies.</h4> <br/>
                            <hr/> <br/>
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited users </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited Huly Objects </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   100GB Storage </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>    100GB Video/Audio Traffic </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   AI-TBD  </p>
                            <button> <a href="">Start Free</a></button>
                        </div>
                        </motion.div>

                        <motion.div id="carousel-card3" style={{x}} >
                            <div className="card3-container">
                            <h3>Epic</h3>
                            <h4>For professional creative companies and small businesses.</h4> <br/>
                            <hr/> <br/>
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited users </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   Unlimited Huly Objects </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   1TB Storage </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   500GB Video/Audio Traffic </p> <br />
                            <p style={{display:"flex", gap:"8px"}} > <FaCheck/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                        </motion.div>

                        <motion.div id="carousel-card4" style={{x}} >
                        <div className="card4-container">
                            <h3>Legendary</h3> <br />
                            <h4>Best for large multiple teams that need maximum capabilities.</h4> <br/>
                            <hr/> <br/>
                            <p style={{display:"flex", gap:"8px"}} >  <FaCheck/>   Unlimited users </p> <br />
                            <p style={{display:"flex", gap:"8px"}} >  <FaCheck/>   Unlimited Huly Objects </p> <br />
                            <p style={{display:"flex", gap:"8px"}} >  <FaCheck/>   10TB Storage </p> <br />
                            <p style={{display:"flex", gap:"8px"}} >  <FaCheck/>   2TB Video/Audio Traffic </p> <br />
                            <p style={{display:"flex", gap:"8px"}} >  <FaCheck/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                        </motion.div>
    </div>
</div>

    </div>
  )
}
