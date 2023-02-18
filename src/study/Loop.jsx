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
    if (inputText.trim() === "") return; //동작을안시킴
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

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "500px",
        padding: "20px 30px",
        borderRadius: "20px",
        boxShadow: "0 0 15px #000",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          lineHeight: "1em",
          margin: 0,
          padding: "10px 0 20px 0",
          color: "#456",
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
            height: "32px",
            border: "1px sold #ddd",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
        <button
          style={{
            height: "32px",
            border: 0,
            background: "none",
            background: "#eee",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleAddtodo}
        >
          add
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
                  width: 20,
                  height: 20,
                  backgroundColor: todo.completed ? "green" : "red",
                  borderRadius: "50%",
                }}
              ></span>
            </div>
            <div>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
//삭제 버튼 넣고 체크된 항목 한번에 삭제
//올체크드 버튼
