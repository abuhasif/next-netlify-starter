import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hearts from "../components/Hearts";
import confetti from "canvas-confetti";

export default function Yes() {
  const audioRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => setShowMessage(true), 2000);
    setTimeout(() => setShowFireworks(true), 1000);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px", position: "relative" }}>
      <Hearts />
      {showFireworks && (
        <div className="fireworks"></div>
      )}
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
      {showMessage && (
        <p style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "red",
          marginTop: "20px"
        }}>
          You’re the best! 💖 Thank you for saying yes!
        </p>
      )}
      <style jsx>{`
        @keyframes fireworks {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        .fireworks {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: url("https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif") no-repeat center center/cover;
          animation: fireworks 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
