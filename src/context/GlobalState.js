import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//! context olusturma
export const GlobalContext = createContext();

const initialState = {
    watchlist: [],
    watched: [],        
};

//! provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    console.log(state)
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
