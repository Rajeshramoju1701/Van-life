import React from "react"
import { Link } from "react-router-dom"
import NavButton from "../NavButton"
export default function MainHomePage(){
    
    return(
        <main>
            <div className="container">
            <div className="card">
                <h1>You got the travel plans, we got the travel vans</h1>
                <div className="description">
                <p>Add adventure to your life by joining the #vanlife movement.</p>
                <p>Rent the perfect van to make your perfect road trip</p>
                </div>
                <NavButton>Find your van</NavButton>
            </div>
            </div>
        </main>
    )
}