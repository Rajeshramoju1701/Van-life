import React from "react";
import { Link } from "react-router-dom";
import TagComponent from "../TagComponent";
export default function VanItem(props){
    return(
        <div className="van-item">
        <Link style={
             {
                textDecoration:"none",
                color: "#161616"
            }
        } to={`/vans/${props.van.id}`}>
        
            <img src={props.van.imageUrl} />
            <div className="van-description">
            <h1>{props.van.name}</h1>
            <p>${props.van.price}</p>
            </div>
            <p>/day</p>
            <TagComponent vanType={props.van.type}/>
        </Link>
        </div>

    )
}