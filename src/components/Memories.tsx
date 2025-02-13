// src/components/Memories.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Memories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Any effects can be added here
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-100 to-yellow-100 overflow-hidden animate-fade-in">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-6">
          Let's Make Memories
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          So I've planned a magical day that I hope you will love. The best part is spending time together and letting the day unfold however it's meant to. 😉
        </p>
        <button
          onClick={() => navigate('/timeline')}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-transform transform hover:scale-105 shadow-lg font-semibold"
        >
          Let's Go! 🎉
        </button>
      </div>

      {/* Inline CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Memories;
