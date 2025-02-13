// src/components/Qualities.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component for animated background elements (floating hearts and texts)
const AnimatedBackground = () => {
  const hearts = Array.from({ length: 15 });
  const texts = Array.from({ length: 8 });
  const randomTexts = ['Love', 'Joy', 'XOXO', '❤️', '💖', 'Kiss'];

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <>
      {hearts.map((_, index) => {
        const left = random(0, 100);
        const delay = random(0, 10);
        const duration = random(10, 20);
        return (
          <div
            key={`heart-${index}`}
            className="absolute text-2xl"
            style={{
              left: `${left}%`,
              bottom: `-50px`,
              animation: `flyUp ${duration}s linear ${delay}s infinite`,
            }}
          >
            ❤️
          </div>
        );
      })}
      {texts.map((_, index) => {
        const left = random(0, 100);
        const delay = random(0, 10);
        const duration = random(10, 20);
        const text = randomTexts[random(0, randomTexts.length - 1)];
        return (
          <div
            key={`text-${index}`}
            className="absolute text-lg font-bold text-pink-500"
            style={{
              left: `${left}%`,
              top: `-50px`,
              animation: `flyDown ${duration}s linear ${delay}s infinite`,
            }}
          >
            {text}
          </div>
        );
      })}
    </>
  );
};

const Qualities = () => {
  const navigate = useNavigate();

  const qualities = [
    { icon: "🌞", title: "Your Sunday Smile", desc: "Makes my day shine" },
    { icon: "😂", title: "Your Humor", desc: "Laughs at my bad jokes" },
    { icon: "🎵", title: "Your Sweet Voice Notes", desc: "Warms my heart" },
    { icon: "🥺", title: "Your Goodness", desc: "Your kind heart melts mine" },
    { icon: "✨", title: "Your Eyes", desc: "They speak volumes" },
    { icon: "💫", title: "Everything About You", desc: "Just perfect as you are" },
  ];

  useEffect(() => {
    // Additional animations or effects can be added here if desired.
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-200 to-blue-200 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl space-y-10">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Why Only You?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div 
              key={index} 
              className="bg-white/95 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
            >
              <div className="text-5xl mb-6 flex justify-center animate-bounce">
                {quality.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center text-pink-600">
                {quality.title}
              </h3>
              <p className="text-center text-purple-500">
                {quality.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/whyme')}
            className="px-10 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-transform transform hover:scale-105 shadow-xl font-bold"
          >
            But Why Me? 🤔
          </button>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes flyUp {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1);
            opacity: 0;
          }
        }
        @keyframes flyDown {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Qualities;
