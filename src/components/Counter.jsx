import { useContext } from "react";
// import { CounterContext } from "../contexts/counterContext";
import { CounterContext } from "../contexts/counterContextWithReducer";
import { Button, Stack } from "@mui/material";


export default function Counter() {
    const { count, decrement, increment, reset } = useContext(CounterContext);
    return (
        <>
            <Stack width="20vw" style={{margin: "auto"}}>
                <h2>Counter Manager</h2>
                <h3>{count}</h3>
                <Button variant="contained" onClick={()=>increment()}>
                    increment
                </Button>
                <Button variant="contained" color="success" onClick={()=>decrement()}>
                    decrement
                </Button>
                <Button variant="contained" color="error" onClick={()=>reset()}>
                    reset
                </Button>
            </Stack>

            <Stack width="20vw" style={{margin: "auto"}}>
                <h2>Counter Manager</h2>
                <h3>{count}</h3>
                <Button variant="contained" onClick={()=>increment()}>
                    increment
                </Button>
                <Button variant="contained" color="success" onClick={()=>decrement()}>
                    decrement
                </Button>
                <Button variant="contained" color="error" onClick={()=>reset()}>
                    reset
                </Button>
            </Stack>
        </>
    )
}