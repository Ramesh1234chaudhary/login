import { createContext, useState } from "react";
                                            
 export const allContext =createContext();
                                                
function CustomProvider({children}){
    const [islogedin,setIslogedin]=useState(false);
    const [user,setUser]=useState({
        name:"",
        password:""
    });
    return <allContext.Provider value={{islogedin, setIslogedin,user,setUser}}>
        {children}
    </allContext.Provider>
}
export  default  CustomProvider;