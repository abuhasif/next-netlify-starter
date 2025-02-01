import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hearts from "../components/Hearts";

export default function Home() {
  const router = useRouter();
  const [shake, setShake] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleNoClick = () => {
    setShake(true);
    setNoClickCount(prevCount => prevCount + 1);
    setTimeout(() => setShake(false), 500);
    
    // Move the No button to a random position
    const newX = Math.random() * 200 - 100; // Random X offset
    const newY = Math.random() * 200 - 100; // Random Y offset
    setNoPosition({ x: newX, y: newY });
    
    if (noClickCount >= 2) {
      alert("Too many attempts! Give me a chance! 😢");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Will You Be My Valentine?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hearts />

      <main>
        <h1>Will You Be My Valentine? ❤️</h1>
        <button className="yes" onClick={() => router.push("/yes")}>Yes</button>
        <button 
          className={`no ${shake ? "shake" : ""}`} 
          onClick={handleNoClick} 
          style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
        >
          No
        </button>
      </main>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px;
          background: url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTl6bHVrMWQ4Y2tkZ28xOGl0ZmE3emU5NTJha2Q0cDQ5enhtMzUyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lTe2eQDZyoAq1mH4HK/giphy.gif") no-repeat center center/cover;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        button {
          padding: 12px 25px;
          font-size: 18px;
          margin: 10px;
          cursor: pointer;
          border: none;
          border-radius: 8px;
          transition: transform 0.2s, background-color 0.3s;
        }
        .yes {
          background-color: #4CAF50;
          color: white;
        }
        .no {
          background-color: #f44336;
          color: white;
          position: absolute;
        }
        .yes:hover {
          background-color: #45a049;
          transform: scale(1.1);
        }
        .no:hover {
          background-color: #d32f2f;
          transform: scale(1.1);
        }
        .shake {
          animation: shake 0.5s;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
