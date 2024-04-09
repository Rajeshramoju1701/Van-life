import React from "react";
import VanItem from "./VansListComponents/VanItem";
export default function VansList(){

    const [vanslist,setVanslist] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => {
            const vansArray = data.vans.map(van => {
                const {id,name,imageUrl,type,price} = van
                return {
                    id:id,
                    name : name,
                    imageUrl : imageUrl,
                    type : type,
                    price : price
                } 
            })
           setVanslist(vansArray) 
        })
    },[])


    function renderVans(vanslist){
        return vanslist.map((van,index) => {
            return <VanItem key={index} van={van}/>
        })
    }

    return(
            <div className="container">
                <h1>Explore our van options</h1>
                <div className="vans-list">
                {renderVans(vanslist)}
            </div>
        </div>
    )
}