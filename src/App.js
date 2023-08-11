import * as React from 'react';
import Todolist from "./components/TodoList"
import styled from '@emotion/styled';

export default function SimpleContainer() {
  const TodoBox = styled("div")({
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '100vh',
    background: "#191b1f",
    direction:"rtl",
  })
  return (
    <TodoBox>
      <Todolist/>
    </TodoBox>
  );
}