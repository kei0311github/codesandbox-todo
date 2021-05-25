import React from "react";

const completedAreaStyle = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompletedTodo = (props) => {
  const { completedTodos, onClickRedo } = props;
  return (
    <>
      <div style={completedAreaStyle} className="completed-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completedTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickRedo(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
