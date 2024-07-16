// import { createContext, useState } from "react";

// export const BacketContext = createContext({
//     products: [],
//     decrement: () => null,
//     increment: () => null,
//     reset: () => null
// });

// export default function BucketProvider(props) {
//     const [product, setCount] = useState([]); // [{idProduct: 1, count:4},{idProduct: 2, count:1}]
//     const decrement = () => count > 0 && setCount(count - 1);
//     const increment = () => { if (count < 20) return setCount(count + 1) };
//     const reset = () => setCount(0);
//     const value = { count, decrement, increment, reset };
//     return (
//         <CounterContext.Provider value={value}>
//             {props.children}
//         </CounterContext.Provider>
//     )
// }
