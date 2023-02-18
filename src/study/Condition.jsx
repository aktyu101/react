import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Title from "../components/Title";

const colorBox = {
  red: (
    <Box width={100} height={100} color="red">
      1
    </Box>
  ),
  blue: (
    <Box width={100} height={100} color="blue">
      2
    </Box>
  ),
  green: (
    <Box width={100} height={100} color="green">
      3
    </Box>
  ),
};

export default function Condition() {
  const [color, setColor] = React.useState("red");
  return (
    <>
      <Title text="Condition Study" />
      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {colorBox[color]}
        {/*삼황연산자 조건 {color === "red" ? (
          <Box width={100} height={100} color="red">
            1
          </Box>
        ) : (
          <Box width={100} height={100} color="blue">
            2
          </Box>
        )} */}

        {/* 개별로 조건을 줄 경우 {color === "red" && (
          <Box width={100} height={100} color="red">
            1
          </Box>
        )}
        {color === "blue" && (
          <Box width={100} height={100} color="blue">
            2
          </Box>
        )}
        {color === "green" && (
          <Box width={100} height={100} color="green">
            3
          </Box>
        )} */}
      </div>
      {/* 조건문 처리 방식 */}
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <Button color="red" onClick={() => setColor("red")}>
          {/* 누를때실행 */}
          active red
        </Button>
        <Button color="blue" onClick={() => setColor("blue")}>
          active blue
        </Button>
        <Button color="green" onClick={() => setColor("green")}>
          active green
        </Button>
      </div>
    </>
  );
}
