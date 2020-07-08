import React, { useState } from 'react';

function CounterExample() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <p>I will change too ----> {count}</p>
    <h1 onClick = {() => setCount(count + 1)}>{count}</h1>
        </div>   
         )
}


export default CounterExample;