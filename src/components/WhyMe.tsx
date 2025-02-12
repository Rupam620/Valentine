// src/components/WhyMe.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WhyMe = () => {
  const navigate = useNavigate();

  const whyMeReasons = [
    { icon: "🫂", title: "I'm your kuchupuchu", desc: "Best partner you could have!" },
    { icon: "🎵", title: "My music taste is best", desc: "I can sing all your favorite songs" },
    { icon: "🤗", title: "I'm never gonna stop irritating you", desc: "aja bhidle" },
    { icon: "💝", title: "I Will Take Care of You", desc: "Like always" }
  ];

  useEffect(() => {
    // Any necessary effects
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden animate-fade-in">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-8">
          Why Me?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyMeReasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl animate-bounce">{reason.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg text-pink-500">{reason.title}</h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/memories')}
            className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-transform duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            Let's Make Memories! ✨
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
      `}</style>
    </div>
  );
};

export default WhyMe;
