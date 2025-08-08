import React,{ useEffect, useState } from "react"; 
import ReactDOM from "react-dom/client"

function  Body() {
    const [Profile,setProfile]=useState([])
    const [numberofProfile,setnumberOfProfile]=useState("")

    async function generateProfile(count){
        const response= await  fetch(`https://api.github.com/users?per_page=${count}`)
        const data= await response.json();
        setProfile(data)
    }

    useEffect(()=>{
        generateProfile(10)
    },[])

    return(
        <div className="but">
           

            <input type="text" className="input" placeholder="Search here" value={numberofProfile} onChange={(e)=>setnumberOfProfile(e.target.value)}></input>
            <button className="search" onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
        <div className="profiles">
            {
                Profile.map((value)=>{ //yha return lgane ki jrurt isliye pdi kyuki map first line wala code return krta h agr 2nd line se shuru hua to return lgana pdta h
                  return(  <div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                    )
            
                })
            }
        </div>
        </div>
        
    )
}
export default Body;

