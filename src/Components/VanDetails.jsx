import React from "react";
import { useParams} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import TagComponent from "./TagComponent";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
export default function VanDetails(){
    const params = useParams()
    
    const [item,setItem] = React.useState({})

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data.vans))
    },[])


    return (
        <div className="container">
            <Link className="back-link" to="/vans">
            <div className="van-details-back">
            <FaArrowLeft />
            <p>Back to all vans</p>
            </div>
            </Link>
            <div className="van-details">
            <img src={item.imageUrl} />
            <TagComponent className="tag" vanType={item && item.type}/>
            <h1>{item.name}</h1>
            <h2>${item.price}<span className="van-price">/day</span></h2>
            <p>{item.description}</p>
            <NavButton>Rent this van</NavButton>
            </div>
        </div>
    )
}