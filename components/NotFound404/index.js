import React from "react";
import Navbar from "../Navbar";


export default function ({ isMobile }) {


    return <>
        {!isMobile && <Navbar />}
        <div className="container d-flex justify-content-center flex-column" >
            <h1>Page not found!</h1>
            <p>Hi, sorry this page not found, You can check our home page <a href="/">here</a></p>
        </div>
    </>
} 