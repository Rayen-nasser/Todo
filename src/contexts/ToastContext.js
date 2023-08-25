import { createContext, useContext } from "react";
import { useState } from "react";
import MySnackBar from "../components/MySnackBar"

export const ToastContext = createContext({});

export const ToastProvider = ({ children }) =>{
    const [open, setOpen] = useState(false);
    const [typeMessage, setTypeMessage] = useState("")
    const [color, setColor] = useState("");

    function showHideSnackBar(Message,color){
        setOpen(true)
        setColor(color)
        setTypeMessage(Message)
        setTimeout(()=>{
          setOpen(false)
        },2000)
      }
    return(
        <ToastContext.Provider value={{showHideSnackBar}}>
            {children}
            <MySnackBar open={open} Message={typeMessage} color={color}/>
        </ToastContext.Provider>
    ) 
    
}

export const useToast = () => {
    return useContext(ToastContext)
}