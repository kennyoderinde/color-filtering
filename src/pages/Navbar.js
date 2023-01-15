import { Link } from "react-router-dom";
import React from "react";
import "../App.css"

export default function Navbar () {
    return (
        <div className="navbar-wrapper">
            <div>
                <div className="circle1 "></div>
                <div className=" circle2"></div>
                <div className=" circle3 "></div>
                <div className=" circle4 "></div>

            </div>
            
            <div className="color--input">
                <h1 className="welcome-note">Welcome to the Color Factory</h1>
                <Link to={"form"}>
                    <h1>Add Your Favourite Color</h1>
                </Link>

            </div>

            <div>
                <div className="circle1 "></div>
                <div className=" circle2"></div>
                <div className=" circle3 "></div>
                <div className=" circle4 "></div>
            </div>
            

            <h2>Please select color</h2>
            <div>
                <Link to={"randomized"}>
                    <h1 className="randomized">Get Randomized Color</h1>
                </Link>
            </div>
            
        
        </div>

    )
}