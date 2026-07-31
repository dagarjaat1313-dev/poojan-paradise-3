
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f4ed",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#7A1F1F", marginBottom: "10px" }}>
          Poojan Paradise
        </h1>

        <h2 style={{ color: "green", marginBottom: "20px" }}>
          ✅ Website is Working
        </h2>

        <p>
          React successfully loaded.
        </p>
      </div>
    </div>
  );
}