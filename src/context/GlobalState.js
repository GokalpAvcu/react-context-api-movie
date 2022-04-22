import { createContext } from "react";

//! context olusturma
export const GlobalContext = createContext();

//! provider components
export const GlobalProvider = (props) => {
    return(
        // bunu ben kapsadigim zaman neyle kapsarsam altındaki tüm componentlerde burda verirsem onu alır.
        // <GlobalContext.Provider> bu parent bir kapsayıcı olur. Provider'ı sarmaladık.
        <GlobalContext.Provider value={{
            Gokalp: "developer",
        }}> 
            {props.children} 
        </GlobalContext.Provider>
    )
}
