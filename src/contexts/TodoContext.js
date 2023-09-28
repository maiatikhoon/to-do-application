
import React, {createContext, useContext} from "react"; 


export const TodoContext = createContext({
        todos : [
            {
                id: 1 , 
                title: "todo message ", 
                completed: false 
            }
        ] , 

        addTodo : (todo)=> {} , 
        updateTodo : (id, todo )=> {} ,  
        deleteTodo : (id)=> {}, 
        toggleComplete : (id, todo)=> {}    
});  


export const TodoContextProvider = TodoContext.Provider; 

export const useTodo =()=> {
      return useContext(TodoContext) ; 
}