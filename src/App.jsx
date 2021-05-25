import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompletedTodo } from "./components/CompletedTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickFinish = (index) => {
    const newTodos = [...completedTodos, incompleteTodos[index]];
    setCompletedTodos(newTodos);
    onClickDelete(index);
  };

  const onClickRedo = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
    const newIncompleteTodos = [...incompleteTodos, completedTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるToDoは5個までです。</p>
      )}

      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickFinish={onClickFinish}
      />
      <CompletedTodo
        completedTodos={completedTodos}
        onClickRedo={onClickRedo}
      />
    </>
  );
};
