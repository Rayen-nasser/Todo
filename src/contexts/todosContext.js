import { createContext, useContext, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";

export const TodosContext = createContext([]);

export const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []) 
    return(
    <TodosContext.Provider value={{todos, dispatch}}>
        {children}
    </TodosContext.Provider>
    )
};

export  const useTodos = () =>{
    return(
        useContext(TodosContext)
    )
}
