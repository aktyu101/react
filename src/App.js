import "./App.css";
import React from "react";

function Count({ children }) {
  return (
    <span
      style={{
        fontSize: "120px",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}

function App() {
  //함수가 새로 실행됨
  console.count("App rerender");
  const [num, setNum] = React.useState(0); //초기값
  function increase() {
    setNum((current) => current + 1);
    //setNum(num + 1);
  }
  const decrease = () => {
    setNum((current) => current - 1);
  };
  return (
    <>
      <div className="app-wrapper">
        <div className="app">
          <div>
            {/* 객체로 반환 {code}*/}
            <Count>{num}</Count>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#fff",
                border: "solid 1px #333",
                padding: "3px 10px",
                color: "red",
                cursor: "pointer",
              }}
              onClick={increase}
            >
              increase
            </button>
          </div>
          <div>
            <button onClick={decrease}>decrease</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
