import { createContext, useState } from "react";

export const CounterContext = createContext({
    count: 0,
    decrement: () => null,
    increment: () => null,
    reset: () => null
});

export default function CounterProvider(props) {
    const [count, setCount] = useState(0);
    const decrement = () => count > 0 && setCount(count - 1);
    const increment = () => { if (count < 20) return setCount(count + 1) };
    const reset = () => setCount(0);
    const value = { count, decrement, increment, reset };
    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}
