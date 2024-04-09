import React from "react";

export default function TagComponent(props){
    console.log(props)
    function renderBackgroundOnType(vantype){
        switch(vantype.toLowerCase()){
            case "simple":
                return "#E17654"
            case "rugged":
                return "#115E59"
            case "luxury":
                return "#161616"
        }
    }
    return (
        (
        props.vanType && 
        <div className="van-type">
            <p style={{
                background : renderBackgroundOnType(props.vanType),
                color : "#FFFFFF"
            }}>{props.vanType}</p>
        </div>
        )
    )
}