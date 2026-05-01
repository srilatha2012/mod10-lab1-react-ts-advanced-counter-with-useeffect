import { useEffect, useState } from "react";

export function AdvancedCounter() {

    const [count, setCount] = useState<number>(0);
    const [history, setHistory] = useState<number[]>([]);

    //helper function to update the count
    function updateCount(newCount: number) {
        setCount(newCount);
        setHistory((prevHistory) => [...prevHistory, newCount]);

    }

    function handleIncrement() {
        updateCount(count + 1);

    }
    function handleDecrement() {
        updateCount(count - 1);
    }
    function handleReset() {
        setCount(0);
        // setHistory((prevHistory) => [...prevHistory, 0]);
        setHistory([]);
    }

    //Auto-save count
    useEffect(() => {
        const timerId = setTimeout(() => {
            localStorage.setItem("count", JSON.stringify(count));
        }, 500)

        return () => {
            clearTimeout(timerId);
        }

    }, [count]);

    //keyboard event listener
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "ArrowUp") {
                updateCount(count + 1);
            }
            if (event.key === "ArrowDown") {
                updateCount(count - 1);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }

    }, [count]);

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