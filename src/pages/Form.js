import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Form({ getUserSelectedColor, getUserInput, updateUserEntries}){  
    
    // const [colorList, setColorList] = React.useState()
    // const [getUserSelectedColor, setGetUserSelectedColor] = React.useState()
    // const [getUserInput, setGetUserInput] = React.useState()
    // const [updateUserEntries, setUpdateUserEntries] =React.useState()
    
    // getUserSelectedColor(){
    //     setGetUserSelectedColor({
    //         userInput: event.target.value;
    //     })

    // }

    return (
        <div className="form-container">
            <form className="form-wrapper">
                <div>
                    <label htmlFor="">Enter a Color</label>
                    <input type="text" onChange={getUserInput}/>
                </div>
                <div>
                    <label htmlFor="">Select Color</label>
                    <input type="color" onChange={getUserSelectedColor}/>
                </div>
                <div>
                    <button onClick={updateUserEntries}>Add Color</button>
                </div>
            </form>
            <Link to={"/"}><h3>Go back to Home</h3></Link>         

        </div>
    )
}