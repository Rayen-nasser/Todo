import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todosContext";
import { ToastContext } from "../contexts/ToastContext";

export default function Todo({ todo , openDeleteDialog, openUpdateDialog}) {
  const { todos, setTodos } = useContext(TodosContext);
  const { showHideSnackBar} = useContext(ToastContext);

  // EVENT HANDLERS
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        !t.isCompleted ? showHideSnackBar("تم انجاز المهمة","success") : showHideSnackBar("تم اضافة المهمة غير منجزة","warning")
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleUpdateClick() {
    openUpdateDialog(todo);
  }

  function handleDeleteDialogClick(){
    openDeleteDialog(todo)
  }

  // ====== EVENT HANDLERS ======
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Typography variant="h5" sx={{ textAlign: "right" ,textDecoration: todo.isCompleted ? "line-through" : "none"}}>
                {todo.title}
              </Typography>

              <Typography variant="h6" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "none"}}>
                {todo.details}
              </Typography>
            </Grid>

            {/* ACTION BUTTONS */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* CHECK ICON BUTTON */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*== CHECK ICON BUTTON ==*/}

              {/* UPDATE BUTTON */}
              <IconButton
                onClick={handleUpdateClick}
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              {/*== UPDATE BUTTON ==*/}

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={handleDeleteDialogClick}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              {/*=== DELETE BUTTON ===*/}
            </Grid>
            {/*== ACTION BUTTONS ==*/}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
