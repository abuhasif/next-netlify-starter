import { useEffect } from "react";

export default function Hearts() {
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
    <style jsx>{`
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
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-100vh);
        }
      }
    `}</style>
  );
}
