import { createContext } from "react";
import { useState } from "react";

// export const AuthContext=createContext({
//     userName:"",//getter
//     setUserName: ()=>null, //setter
//     clearUserName: ()=>null //setter
// });

export const AuthContext=createContext(null);

export default function AuthProvider(props){
    const [userName, setUserName]=useState("");
    const clearUserName=()=>setUserName("");
    const value={userName,setUserName,clearUserName};
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}



