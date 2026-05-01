import { useEffect, useState } from "react";

export function AdvancedCounter() {

    const [count, setCount] = useState<number>(0);
    const [history, setHistory] = useState<number[]>([]);

    function handleIncrement() {
        const newCount = count + 1;
        setCount(newCount);
        setHistory((prevHistory) => [...prevHistory, newCount]);

    }
    function handleDecrement() {
         const newCount = count - 1;
        setCount(newCount);
        setHistory((prevHistory) => [...prevHistory, newCount]);
    }
    function handleReset() {
        setCount(0);
        setHistory((prevHistory) => [...prevHistory, 0]);
    }

    useEffect(()=> {
        const timerId = setTimeout(()=>{
          localStorage.setItem("count",JSON.stringify(count));
        },500)
        
        return () => {
            clearTimeout(timerId);
        }

    },[count])

    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <h3>History</h3>
            <ul>{history.map((value, index) => (
                <li key={index}>{value}</li>
            ))}</ul>
        </div>
    )

}