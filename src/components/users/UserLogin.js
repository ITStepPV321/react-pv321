import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { AuthContext } from '../../contexts/authContext';


export default function UserLogin() {
    
    // const dataAuthContext=React.useContext(AuthContext);
    const {userName, setUserName}=React.useContext(AuthContext);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userName:'',
            email: '',
            password: ''
        }
    }
    );
    const onSubmit = (data) => {
        console.log(data);
        setUserName(data.userName);
        console.log(userName);

    }

    return (
        <form style={{ width: "60vw", margin: "auto", marginTop: "5vh" }} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField
                    required
                    id="outlined-required"
                    label="userName"
                    // defaultValue="Hello World"
                    {...register("userName")}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                    // defaultValue="Hello World"
                    {...register("email")}
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password")}
                />
                {/* <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                /> */}
                <Button variant="contained" type='submit'>Contained</Button>
            </Stack>
        </form>
    )
}