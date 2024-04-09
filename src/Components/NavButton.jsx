import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({children}){
    return(
        <Link className="nav-button" to="/vans">{children}</Link>
    )
}