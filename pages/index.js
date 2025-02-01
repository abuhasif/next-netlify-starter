import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [shake, setShake] = useState(false);

  const handleNoClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

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
      `}</style>
    </div>
  );
}
