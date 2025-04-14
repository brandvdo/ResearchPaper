
import Article from "./Article";

export default function Dark() {
  return (
    <div style={{ backgroundColor: "#121212", color: "white" }}>
      <Article darkMode={true} />
    </div>
  );
}