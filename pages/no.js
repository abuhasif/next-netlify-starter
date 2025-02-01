import { useRouter } from "next/router";

export default function No() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oh no! Maybe next time? 😢</h1>
      <img 
        src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif" 
        alt="Sad GIF" 
        style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
      />
      <br />
      <button 
        onClick={() => router.push("/")} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#ff9800",
          color: "white"
        }}
      >
        Try Again?
      </button>
    </div>
  );
}
