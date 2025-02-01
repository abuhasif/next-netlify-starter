import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Hearts from "../components/Hearts";

export default function Yes() {
  const audioRef = useRef(null);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Hearts />
      <h1>Yay! You made my day! ❤️</h1>
      <audio ref={audioRef} loop>
        <source src="/pages/Replay.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <img 
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzkxOGxhbjZsNHhxbmVqMzBqN2RsNWN0anFtajZoZDY3OXFuYjRkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CyoQdbc7FHqqTpkSPI/giphy.gif" 
        alt="Happy GIF" 
        style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
      />
    </div>
  );
}
