import React from "react";

const incompleteAreaStyle = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickFinish, onClickDelete } = props;
  return (
    <>
      <div style={incompleteAreaStyle} className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickFinish(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
