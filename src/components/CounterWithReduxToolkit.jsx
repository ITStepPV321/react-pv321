import { Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByN,
    reset
} from "../storeReduxToolkit/counterSlice";
import { useState } from "react";
// useDispatch() , useSelector() => react-redux


export default function CounterWithReduxToolkit() {
    //get data state from store redux/toolkit
    const count=useSelector((store)=>store.counter.count);
    const title=useSelector((store)=>store.counter.title);
    //set data state
    const dispatch=useDispatch();

    const [incValue, setIncValue]=useState(0);
    return (
        <>
           <Stack width="20vw" style={{ margin: "auto" }}>
                <h2>Counter Manager with Redux/Toolkit</h2>
                <h3>{title} {count}</h3>
                <input type="number" onChange={(event)=>setIncValue(event.target.value)}/>
                <Button variant="contained" onClick={()=>dispatch(increment())}>
                    increment
                </Button>
                <Button variant="contained" color="success" onClick={()=>dispatch(decrement())}>
                    decrement
                </Button>
                <Button variant="contained" onClick={() => {dispatch(incrementByN(Number(incValue)))}}>
                    increment (+2)
                </Button>
                <Button variant="contained" color="error" onClick={()=>dispatch(reset())}>
                    reset
                </Button>
            </Stack>
        </>
    )
}