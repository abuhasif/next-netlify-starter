import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Will You Be My Valentine?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Will You Be My Valentine? ❤️</h1>
        <button className="yes" onClick={() => router.push('/yes')}>Yes</button>
        <button className="no" onClick={() => router.push('/no')}>No</button>
      </main>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #ffcccb;
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
        }
        .yes {
          background-color: #4CAF50;
          color: white;
        }
        .no {
          background-color: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
}
