function Button({ children }) {
  return (
    <button
      style={{
        backgroundColor: "#fff",
        border: "solid 1px #333",
        padding: "3px 10px",
        color: "red",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
