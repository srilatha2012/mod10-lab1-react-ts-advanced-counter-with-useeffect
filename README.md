# React + TypeScript + Vite
# React Advanced Counter with useEffects

This React app demonstrates counter functionality using `useState` and `useEffect`
## Features
- Increment count
- Decrement count
- Reset count to 0
- Clear history on reset
- Track count history
- Auto-save count to local storage
- Keyboard controlls
    ArrowUp - Increments count
    ArrowDown - Decrement count

## useState usage
the app uses `useState` for state management
 const [count, setCount] = useState<number>(0);
 const [history, setHistory] = useState<number[]>([]);

 count stores the current counter value
 history stores the previous count changes

 ## useEffect usage
 The app uses useEffect for side effects with proper dependency arrays.
  useEffect(() => {
        const timerId = setTimeout(() => {
            localStorage.setItem("count", JSON.stringify(count));
        }, 500)

        return () => {
            clearTimeout(timerId);
        }

    }, [count]);

This runs whenever count changes and saves the latest count to localStorage.
The cleanup function clears the timer if count changes again before saving.

Keyboard event listener
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

This adds keyboard controls and removes the event listener during cleanup.

## Summary
- correct usage of useState
- correct usage of useEffect
- proper dependency arrays
- cleanup functions for timers and event listerns
- core counter functionality
- features including history, auto-save, keyboard controls, and reset