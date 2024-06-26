import React from "react";
import { Link } from "react-router-dom";
export default function AboutPage() {
    return (
        <div className="about-main">
            <div className="container">
                <img src="../../src/assets/about_image.svg" />
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <div>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div class="explore-vans">
                    <div className="description">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    </div>
                    <Link to="/vans">Find your van</Link>
                </div>
            </div>
        </div>
    )
}