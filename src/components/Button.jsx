export default function Button({ children, onClick, color, fill = false }) {
  return (
    <button
      style={{
        backgroundColor: fill ? color : "#fff",
        border: fill ? "none" : `solid 1px ${color}`, //fill이면 none 아니라면 컬러값
        padding: "7px 15px",
        color: fill ? "#fff" : color, //color : color 와 동일함
        cursor: "pointer",
        fontSize: "28px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
