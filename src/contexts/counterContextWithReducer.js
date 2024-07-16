import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext(null);

const count = 0; // initial count


// reducer=(state, action)=>{
//     ... return new_state
// }


// const action={
// type: Name_action // 'INCREMET',
// payload: ... //step 
// }
//
//======== TYPES Actions=============
export const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

// export const counterReducer=(state=count,action)=>{
// //   const  {type}=action
//     switch (action.type){
//         case COUNTER_ACTION_TYPES.INCREMENT:
//             return state+1;
//         case 'DECREMENT':
//             return state-1; 
//         case 'RESET':
//             return 0;
//         default:
//             return state
//             // throw new Exeption('Invalid type actoion!!!')
//     } 
// }


const INITIAL_STATE2 = {
    count: 0,
    title: "Counter #"
}


export const counterReducer2 = (state = INITIAL_STATE2, action) => {
    const { type, payload } = action;
    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + payload
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - payload
            };;
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        default:
            return { ...state }
        // throw new Exeption('Invalid type actoion!!!')
    }
}

export default function CounterProvider(props) {
    // const [count, setCount] = useState(0); //change on useReducer
    // const [state, dispatch]=useReducer(counterReducer,INITIAL_STATE);
    // const [count, dispatch]=useReducer(counterReducer,count);
    const [{count, title}, dispatch] = useReducer(counterReducer2, INITIAL_STATE2);

    const decrement = () => { dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT,payload:1 }) };
    const increment = () => { dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT, payload:1 }) };
    const reset = () => { dispatch({ type: COUNTER_ACTION_TYPES.RESET }) };
    const value = { count, decrement, increment, reset };
    console.log(count);
    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}
