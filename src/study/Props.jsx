import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";

function Count(props) {
  return (
    <span
      style={{
        fontSize: "120px",
        fontWeight: "bold",
      }}
    >
      {props.i}
    </span>
  );
}

export const Props = () => {
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
      <Title text="count study" color="#0f766e" />
      <div>
        <Count i={num} />
      </div>
      <div>
        <Button onClick={increase} color="#1e40af" fill>
          increase
        </Button>
        {/* <Button onClick={increase} color="red">
          increase
        </Button>
        <Button onClick={increase} color="green" fill>
          increase
        </Button> */}
      </div>
    </>
  );
};
