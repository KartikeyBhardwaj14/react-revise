import React, { useState,useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client"

//function App(){
//     const [count,setCount] =useState(0)
//     const [money,setMoney] =useState(0)


//     return(
//         <>
//          <h1>Counter is: {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment </button>


//          <h1>Money is: {money}</h1>
//         <button onClick={()=>setMoney(money+1)}>Increment </button>
//         </>
//     )
// 
//}



function StopWatch(){
    const[time,setTime]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    let intervalRef=useRef(null);

    function start(){
        if(!isRunning){//if else isliye lagaya ki agr time already chalu h to start pr baar baar click ka no fayeda if baar click kra aur if na hua to endless loop

        intervalRef.current=setInterval(()=>{
            setTime((prevtime)=>prevtime+1)
        },100)
         setIsRunning(true)}
    }
    function stop(){
        if(isRunning){
             clearInterval(intervalRef.current)
             intervalRef.current=null;
             setIsRunning(false)
        }
       
    }
    function reset(){
        clearInterval(intervalRef.current)
        intervalRef.current=null;
        setTime(0)
    }




    return(
        <>

        <h1>StopWach is:{time}</h1>
        <button onClick={start}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>reset</button>
        </>
    )

}









ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>)