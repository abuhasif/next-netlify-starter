import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [shake, setShake] = useState(false);

  const handleNoClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Will You Be My Valentine?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Will You Be My Valentine? ❤️</h1>
        <button className="yes" onClick={() => router.push("/yes")}>Yes</button>
        <button className={`no ${shake ? "shake" : ""}`} onClick={handleNoClick}>No</button>
      </main>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px;
          background-color: #ffcccb;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          transition: transform 0.2s;
        }
        .yes {
          background-color: #4CAF50;
          color: white;
        }
        .no {
          background-color: #f44336;
          color: white;
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
        .heart {
          position: fixed;
          bottom: 0;
          width: 20px;
          height: 20px;
          background-color: red;
          clip-path: polygon(50% 0%, 100% 30%, 80% 100%, 50% 80%, 20% 100%, 0 30%);
          opacity: 0.7;
          animation: floatUp 5s linear infinite;
        }
        @keyframes floatUp {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
      `}</style>
    </div>
  );
}
