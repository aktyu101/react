export default function Box({ children, width, height, color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width,
        height,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
}
