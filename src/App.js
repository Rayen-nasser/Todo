import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
import { ToastContext } from "./contexts/ToastContext";
import { useState } from "react";
import MySnackBar from "./components/MySnackBar"
import { v4 as uuidv4 } from "uuid";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main:"#f44336",
    }
  }
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "تيسمبتيس يتسبميتس بيمستب",
    isCompleted: false,
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [typeMessage, setTypeMessage] = useState("")
  const [color, setColor] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function showHideSnackBar(Message,color){
    setOpen(true)
    setColor(color)
    setTypeMessage(Message)
    setTimeout(()=>{
      setOpen(false)
    },2000)
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{showHideSnackBar}}>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#191b1f",
            height: "100vh",
            direction: "rtl",
          }}
        >
          <MySnackBar open={open} Message={typeMessage} color={color}/>
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
