import React from "react";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home= () =>{
    return(
        <>
            <div className="home" id="home">

                 <main>
                    
                        <h1>NewEarth</h1>

                    <p>Solution to your problem</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only Solution to the tech problems you face everyday
                                We are leading tech company whose aim is to increase the problem
                                solvng ability in children
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who are you</h1>
                    <p>
                        We are the Student who providing the services of the Computer softwear related. 
                        And We also providing the Games and other softwear.
                    </p>
                </div>
            </div>

            <div className="home4" id="brand">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>
                        
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>

                        </div>
                        
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>
                        
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagarm</p>

                        </div>
                    </article>
                </div>

            </div>
        </>
    ) 
}

export default Home;