import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosProvider } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#f44336",
    },
  },
});

// const initialTodos = [
//   {
//     id: uuidv4(),
//     title: "قراءة كتاب",
//     details: "...",
//     isCompleted: false,
//   },
// ];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastProvider>
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
            <TodoList />
          </div>
        </ToastProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
