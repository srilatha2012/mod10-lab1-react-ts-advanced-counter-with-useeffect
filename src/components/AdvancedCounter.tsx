import { useEffect, useState } from "react"

export function AdvancedCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Current Count {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )

}