import { v4 as uuidv4 } from "uuid";

export default function todoReducer(currentState, action) {
  switch (action.type) {
    case "get": {
      const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
      return storageTodos;
    }
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.todoTitle,
        details: "",
        isCompleted: false,
      };

      const updatedTodos = [...currentState, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "deleted": {
      const updatedTodos = currentState.filter((t) => {
        return t.id !== action.payload.dialogTodo.id;
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "updated": {
      const updatedTodos = currentState.map((t) => {
        if (t.id === action.payload.dialogTodo.id) {
          return {
            ...t,
            title: action.payload.dialogTodo.title,
            details: action.payload.dialogTodo.details,
          };
        } else {
          return t;
        }
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "checked": {
      const updatedTodos = currentState.map((t) => {
        if (t.id === action.payload.todo.id) {
          const updateTodo = {
            ...t,
            isCompleted: !t.isCompleted,
          };
          return updateTodo;
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    default: {
      throw Error("unknown Action " + action.type);
    }
  }
  return [];
}
