import React, { useState,useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client"

function App(){
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);


    function Fibonacci(n){
        if(n<=1)
            return n;

        return Fibonacci(n-1)+Fibonacci(n-2)
    }

    let result=useMemo(()=>Fibonacci(number),[number])

    

    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setCount(count-1)}>Decrement </button>
        <div>
            <h2>Fibonacci no.: {result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)