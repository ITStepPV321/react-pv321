import { Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../store/reducers/counterReducer";
import {reset, increment as inc, decrement as dec,  increment_by_n as incn  } from "../store/reducers/counterReducer";
// useDispatch() , useSelector() => react-redux


export default function CounterWithRedux() {
    // const count=useSelector((store)=>store.counter.count);
    const count=useSelector(selectCount);
    const title=useSelector((store)=>store.counter.title);
    const dispatch=useDispatch();
    // const plus=()=>{dispatch({type:"INCREMENT"})};
    const plus=()=>{dispatch(inc())};
    const minus=()=>{dispatch(dec())};
    const clear=()=>{dispatch(reset())};


    // const { count, decrement, increment, reset, increment_by_n } = useContext(CounterContext);
    return (
        <>
           <Stack width="20vw" style={{ margin: "auto" }}>
                <h2>Counter Manager with Redux</h2>
                <h3>{title} {count}</h3>
                <Button variant="contained" onClick={plus}>
                    increment
                </Button>
                <Button variant="contained" color="success" onClick={minus}>
                    decrement
                </Button>
                <Button variant="contained" onClick={() => {dispatch(incn(2))}}>
                    increment (+2)
                </Button>
                <Button variant="contained" color="error" onClick={clear}>
                    reset
                </Button>
            </Stack>
        </>
    )
}