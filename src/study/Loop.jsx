import React, { useState } from "react";
import "./Loop.css";

const initialTodoList = [
  { id: 1, checked: false, text: "buy milk", completed: false },
  { id: 2, checked: false, text: "walking", completed: true },
  { id: 3, checked: false, text: "Do laundry", completed: false },
];

export default function Condition() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };
  const handleAddtodo = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: todoList.length + 1,
      text: inputText,
      completed: false,
      checked: false,
    };
    setTodoList((list) => [...list, newTodo]); //하나가 추가되는 형태
    //trim 앞뒤 공백 제거
    setInputText("");
  };
  const handleDeleteTodo = (id) => {
    setTodoList((list) =>
      list
        .filter((todo) => todo.id !== id)
        .map((todo, index) => ({ ...todo, id: index + 1 }))
    );
  };
  //선택삭제
  const handleCheckDeleteTodo = () => {
    const noneChecked = todoList
      .filter((todo) => todo.checked === false)
      .map((todo, index) => ({ ...todo, id: index + 1 }));
    console.log("none", noneChecked);
    setTodoList(noneChecked);
  };
  //전체삭제
  const allDeleteTodo = () => {
    let allclear = todoList;
    allclear = [];
    setTodoList(allclear);
  };
  //완료여부
  const handleCheckTodo = (event) => {
    const id = Number(event.target.name);
    const checked = event.target.checked;
    setTodoList((list) =>
      list.map((todo) => {
        return { ...todo, checked: todo.id === id ? checked : todo.checked };
      })
    );
    // console.log(event.target.checked);
    // console.log(event.target.name);
  };
  //완료
  const completedTodo = (id) => {
    let checkCompleted = todoList.map((todo) => ({
      ...todo,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#f2e9fb21",
        width: "500px",
        padding: "20px 30px",
        borderRadius: "10px",
        boxShadow: "9px 9px 18px rgb(214 214 214), -9px -9px 18px #ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          lineHeight: "1em",
          margin: 0,
          padding: "10px 0 20px 0",
          color: "rgb(0 87 174)",
        }}
      >
        Todo App
      </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={inputText}
          onChange={handleChangeInput}
          style={{
            textIndent: "10px",
            height: "32px",
            border: "0.5px solid #0057ae",
            borderRadius: "5px",
            boxSizing: "border-box",
            flexGrow: 1,
          }}
        />
        <button
          style={{
            height: "32px",
            width: 56,
            border: 0,
            background: "none",
            background: "rgb(0 87 174)",
            borderRadius: "5px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={handleAddtodo}
        >
          +
        </button>
      </div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          marginTop: "20px",
        }}
      >
        {todoList.map((todo, index) => (
          <li
            key={index}
            // 구분값 loop돌 때 꼭 필요함 todo.id
            className="todo-item"
            style={{
              display: "flex",
              listStyle: "none",
              padding: "10px 0",
              justifyContent: "space-between",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="checkbox"
                name={todo.id}
                checked={todo.checked}
                onChange={handleCheckTodo}
              />
            </div>
            <div style={{ flexGrow: 1 }}>
              {todo.id}. {todo.text}
            </div>
            <div>
              <span
                style={{
                  display: "flex",
                  width: 8,
                  height: 8,
                  backgroundColor: todo.completed ? "#005500" : "#c00000",
                  borderRadius: "50%",
                }}
              ></span>
            </div>
            <div>
              <button
                className="deleteBtn"
                onClick={() => handleDeleteTodo(todo.id)}
                style={{
                  backgroundColor: "#969696",
                  border: "none",
                  borderRadius: 5,
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 10,
          gap: 5,
        }}
      >
        <button className="delBtn" onClick={() => handleCheckDeleteTodo()}>
          선택 삭제
        </button>
        <button className="delBtn" onClick={() => allDeleteTodo()}>
          전체 삭제
        </button>
        <button
          className="delBtn"
          onClick={() => completedTodo()}
          style={{ backgroundColor: "#0057ae", color: "#fff" }}
        >
          완료
        </button>
      </div>
    </div>
  );
}
