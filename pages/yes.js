import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Yes() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Yay! You made my day! ❤️</h1>
      <img 
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzkxOGxhbjZsNHhxbmVqMzBqN2RsNWN0anFtajZoZDY3OXFuYjRkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CyoQdbc7FHqqTpkSPI/giphy.gif" 
        alt="Happy GIF" 
        style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
      />
    </div>
  );
}
