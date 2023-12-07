"use client"

import { useState } from "react";
const Counter = () => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>hello worlds</h1>
            <h1>{count}</h1>
            <button className="btn bg-red-400 btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
            <button className="btn btn-primary" onClick={()=>setCount(count-1)}>Decrease</button>
            

        </div>
    );
};

export default Counter;