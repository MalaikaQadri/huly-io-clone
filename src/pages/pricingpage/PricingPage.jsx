import React from 'react'
import './PricingPage.css'
// import Navbar from '../../components/navbar/Navbar'
import HulyImg from '../../assets/Images/huly-logo-black-bg.png'
// import StorageImg from '../../assets/Images/storage-img.png'
import Storageimg from '../../assets/Images/storage-para-img.png'
import NetworkImg from '../../assets/Images/network-img.png'
import Footer from '../../components/footer/footer2/Footer'
import Mainfooter from '../../components/footer/mainfooter/Mainfooter'
import HorizontalScroll from '../../components/horizontalscroll/HorizontalScroll'
import { FaTelegramPlane } from "react-icons/fa";
export default function PricingPage() {
    return (



    <div>
        {/* --------Nav bar --------------- */}
            {/* <Navbar/> */}

        <div className="main">
        <p  >The Huly team prioritizes open software, ensuring Huly remains free.To sustain cloud operations and further development, cloud users will be charged for consumed cloud resources. These resources currently fall into three categories:
            </p>
{/* <img  style={{ height:"8rem", margin:"0", padding:"0" }} src={Storageimg} alt="" /> */}

           <p className='inline-icon' >   storage,  network  and compute.</p>
            <br/>
            <br/> <br/>
            <p>Storage charges depend on data size, excluding Huly objects but including attachments. Users can have unlimited Huly objects without storage limitations, but documents 
                , images 
                
                and videos 
                are counted based on the plan.</p>
                <br/><br/>
                <p>Network charges apply only to audio and video calls.</p>
                {/* <br/> */}
                {/* <br/> */}
                <p>Compute resource charges will apply to the upcoming Huly AI and Huly MetaBrain features, with costs assured to be no higher than industry leaders like OpenAI. Users can pay for these services directly via their OpenAI 
                    accounts.</p>
                </div>
                <HorizontalScroll/>
                {/* <!-- ----------------Carousel Animation cards------- --> */}
                {/* <div id="carousel">

                    <div id="carousel-card1">
                        <div className="card1-container">
                            <h3>Common</h3>
                            <h4>For individuals and teams getting started with Huly.</h4> <br/>
                            <hr/> <br/>
                            <p> <img src="" alt=""/>   Unlimited users </p> 
                            <p> <img src="" alt=""/>   Unlimited Huly Objects </p>
                            <p> <img src="" alt=""/>   10GB Storage per Workspac </p>
                            <p> <img src="" alt=""/>   10GB Video/Audio Traffic </p>
                            <p> <img src="" alt=""/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                    </div>

                    <div id="card2">
                        <div className="card2-container">
                            <h3>Rare</h3>
                            <h4>For individual creatives, freelancers, and micro-agencies.</h4> <br/>
                            <hr/> <br/>
                            <p> <img src="" alt=""/>   Unlimited users </p> 
                            <p> <img src="" alt=""/>   Unlimited Huly Objects </p>
                            <p> <img src="" alt=""/>   100GB Storage </p>
                            <p> <img src="" alt=""/>   100GB Video/Audio Traffic </p>
                            <p> <img src="" alt=""/>   AI-TBD  </p>
                            <button> <a href="">Start Free</a></button>
                        </div>
                    </div>

                    <div id="card3">
                        <div className="card3-container">
                            <h3>Epic</h3>
                            <h4>For professional creative companies and small businesses.</h4> <br/>
                            <hr/> <br/>
                            <p> <img src="" alt=""/>   Unlimited users </p> 
                            <p> <img src="" alt=""/>   Unlimited Huly Objects </p>
                            <p> <img src="" alt=""/>   1TB Storage </p>
                            <p> <img src="" alt=""/>   500GB Video/Audio Traffic </p>
                            <p> <img src="" alt=""/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                    </div>

                    <div id="card4">
                        <div className="card4-container">
                            <h3>Legendary</h3>
                            <h4>Best for large multiple teams that need maximum capabilities.</h4> <br/>
                            <hr/> <br/>
                            <p> <img src="" alt=""/>   Unlimited users </p> 
                            <p> <img src="" alt=""/>   Unlimited Huly Objects </p>
                            <p> <img src="" alt=""/>   10TB Storage </p>
                            <p> <img src="" alt=""/>   2TB Video/Audio Traffic </p>
                            <p> <img src="" alt=""/>   AI-TBD  </p>
                            <button> <a href="#">Start Free</a></button>
                        </div>
                    </div>
                    
                </div> */}
                <br />
                <br /> <br /> <br />
                <div id="last-para">
                    <p>Our Custom Plan is tailored to meet your unique needs and requirements. Get specific features, extra storage, or enhanced support. Flexible pricing based on your specifications.</p> <br/> <br/>
                    <p>Ready to discussyour needs and get personalized quote?</p>

                    <p className="contact-us"> <FaTelegramPlane/> Contact Us
                    
                    </p>

                </div>

                    <Mainfooter/>
                <Footer/>

    </div>
    )
}
