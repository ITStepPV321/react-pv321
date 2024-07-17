import { Button, Stack } from "@mui/material";
// useDispatch() , useSelector() => react-redux


export default function CounterWithRedux() {
    // const { count, decrement, increment, reset, increment_by_n } = useContext(CounterContext);
    return (
        <>
           <Stack width="20vw" style={{ margin: "auto" }}>
                <h2>Counter Manager</h2>
                {/* <h3>{count}</h3> */}
                {/* <Button variant="contained" onClick={() => increment()}>
                    increment
                </Button>
                <Button variant="contained" color="success" onClick={() => decrement()}>
                    decrement
                </Button>
                <Button variant="contained" onClick={() => increment_by_n(2)}>
                    increment (+2)
                </Button>
                <Button variant="contained" color="error" onClick={() => reset()}>
                    reset
                </Button> */}
            </Stack>
        </>
    )
}