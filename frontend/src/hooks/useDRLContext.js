import { DRLContext } from "../context/DRLContext";
import { useContext } from "react";

export const useDRLContext = () =>{
    const context = useContext(DRLContext)

    if(!context){
        throw Error('useDRLContext must be used inside a DRLContextProvider')
    }

    return context;
}