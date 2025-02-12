import React, { useState, useRef } from 'react';
import { Sparkles, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import musicc from '../music/musicc.mp3';

// Helper function for random numbers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Component for background animations (flying hearts and texts)
const BackgroundAnimations = () => {
  const hearts = Array.from({ length: 12 });
  const texts = Array.from({ length: 7 });
  const randomTexts = ['Love', 'Be Mine', 'XOXO', '❤️', 'Adore', 'Kiss', 'Forever'];

  return (
    <>
      {/* Flying Hearts */}
      {hearts.map((_, index) => {
        const left = random(0, 100);
        const delay = random(0, 10);
        const duration = random(8, 15);
        return (
          <div
            key={`heart-${index}`}
            className="absolute text-2xl"
            style={{
              left: `${left}%`,
              bottom: `-50px`,
              animation: `fly ${duration}s linear ${delay}s infinite`,
            }}
          >
            ❤️
          </div>
        );
      })}

      {/* Floating Texts */}
      {texts.map((_, index) => {
        const left = random(0, 100);
        const delay = random(0, 10);
        const duration = random(10, 20);
        const text = randomTexts[random(0, randomTexts.length - 1)];
        return (
          <div
            key={`text-${index}`}
            className="absolute text-xl font-bold text-pink-500"
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

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDEFF4] to-[#E8F7FF]">
      {/* Background animations */}
      <BackgroundAnimations />

      {/* Smaller Glassmorphism Card */}
      <div className="relative z-10 bg-white/60 backdrop-blur-lg rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/20 text-center space-y-6 animate-fade-in max-w-xl mx-auto">
        <Sparkles className="w-14 h-14 text-pink-500 mx-auto animate-bounce" />
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#ff7b8f] to-[#ff178b] text-transparent bg-clip-text">
          Hey Madam Ji, Will You Be My Valentine?
        </h1>
        <h2 className="text-lg sm:text-xl text-pink-400 font-semibold animate-pulse">
          Let's go to japan or ladakh maybe?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/qualities')}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-[#FF9BB0] hover:to-[#FF85A3] transition-transform transform hover:scale-105 shadow-lg active:scale-95 font-semibold"
          >
            Yes, I'm Curious! 💖
          </button>
          <button
            onClick={togglePlay}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-[#FF9BB0] hover:to-[#FF85A3] transition-transform transform hover:scale-105 shadow-lg active:scale-95 font-semibold flex items-center gap-2"
          >
            <Music className="w-5 h-5" /> {isPlaying ? 'Pause Music' : 'Play Music 🎶'}
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={musicc} />

      {/* Inline CSS for keyframe animations */}
      <style>{`
        @keyframes fly {
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Intro;
