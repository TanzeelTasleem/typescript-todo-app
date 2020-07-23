import React, { useReducer } from "react";
import { TodoState, ProviderProps, Actions } from "../Types/type";
import { createContext } from "react";
import { RootReducer } from "./rootReducer";

const initialState: TodoState = {
  todo: [
    { text: "pick" },
    { text: "drop" },
    { text: "eat" },
  ]
  }

export const GlobalContext = createContext<{ state: TodoState , dispatch : React.Dispatch<Actions> }>({state: initialState , dispatch : () => null })

export const GlobalProvider = (props : ProviderProps) => {
        
    const [state , dispatch] = useReducer(RootReducer,initialState)
    return(
            <GlobalContext.Provider value={{
                 state,
                 dispatch
                }}>
                {props.children}
            </GlobalContext.Provider>
        )
};
