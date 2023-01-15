import React from 'react'
import { Link, useParams } from "react-router-dom"

export default function Randomized({colorList}) {
    
    const { colorName, colorHex } = useParams()

    return (
        <div className="colorDisplay" style={{background: `#${colorHex}`}}>
            <h1>This is Color {colorName} with Hex {`#${colorHex}`}</h1>
            <Link to={"/randomized"}><h1>Go Back</h1></Link>
        </div>
    )
}