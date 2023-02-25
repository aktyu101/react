import { useState, useEffect } from "react";
// lifecycle
// mounted
// updated state 필요
// destroy 3개는 언제 발생하는지 알고 있어야함
const LifeCycle = () => {
  const [view, setView] = useState(false);

  useEffect(() => {
    console.log("lifecycle mounted");
  }, []);
  useEffect(() => {
    console.log("lifestyle updated");
  }, [view]); //추적하고 싶은 state

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#000",
          }}
          onClick={() => setView((state) => !state)}
        >
          toggle children
        </button>
      </div>

      <div
        style={{
          width: 500,
          height: 500,
          display: "flex",
          backgroundColor: "#dadada",
          borderRadius: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {view && <Children />}
        {/* 새로 생성되는 시점에서 mounted 발생 */}
      </div>
    </div>
  );
};

const Children = () => {
  useEffect(() => {
    console.log("children mounted");
    return () => {
      console.log("children destroy");
    };
  }, []);
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: "30px",
      }}
    />
  );
};
export default LifeCycle;
//하위 요소들이 lifecycle 먼저 발생
