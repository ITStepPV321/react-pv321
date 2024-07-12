import { createContext } from "react";

export const AuthContext=createContext({
    userName:"",//getter
    setUserName: ()=>null, //setter
    clearUserName: ()=>null //setter
});


