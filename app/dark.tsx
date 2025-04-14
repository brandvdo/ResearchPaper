
import Article from "./Article";

export default function Dark() {
  return (
    <div style={{ backgroundColor: "#121212", color: "white" }}>
      <h1>Welcome to Dark</h1>
      <Article darkMode={true} />
    </div>
  );
}