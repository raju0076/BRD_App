import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift } from 'lucide-react';

function App() {
  const [stage, setStage] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  // Create magical effects for each stage
  useEffect(() => {
    if (stage > 0) {
      setShowHearts(true);
      const timer = setTimeout(() => setShowHearts(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage >= 2) {
      setShowStars(true);
      const timer = setTimeout(() => setShowStars(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage >= 3) {
      setShowFireworks(true);
      const timer = setTimeout(() => setShowFireworks(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleClick = () => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      // Reset to beginning for replay
      setStage(0);
      setTimeout(() => setStage(1), 500);
    }
  };

  const generateFloatingHearts = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <div
        key={`heart-${i}`}
        className={`absolute animate-float-up ${
          showHearts ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      >
        <Heart className="text-pink-400 w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse" />
      </div>
    ));
  };

  const generateMagicalStars = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={`star-${i}`}
        className={`absolute animate-twinkle ${
          showStars ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      >
        <Star className="text-yellow-300 w-2 h-2 sm:w-3 sm:h-3 fill-current" />
      </div>
    ));
  };

  const generateFireworks = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <div
        key={`firework-${i}`}
        className={`absolute animate-firework ${
          showFireworks ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
        style={{
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    ));
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center cursor-pointer overflow-hidden relative touch-manipulation"
      onClick={handleClick}
    >
      {/* Magical Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Hearts */}
        {generateFloatingHearts()}
        
        {/* Magical Stars */}
        {generateMagicalStars()}
        
        {/* Fireworks */}
        {generateFireworks()}

        {/* Sparkle Effects */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: '4s'
            }}
          >
            <Sparkles className="text-yellow-300 w-1 h-1 sm:w-2 sm:h-2 opacity-70" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="text-center z-10 relative w-full px-4 sm:px-6 lg:px-8">
        
        {/* Initial Message */}
        {stage === 0 && (
          <div className="animate-magical-entrance">
            <div className="mb-6 sm:mb-8">
              <Gift className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-pink-300 mx-auto animate-bounce-slow mb-4" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 animate-glow-pulse leading-tight">
              ✨ Tap for Magic ✨
            </h1>
            <p className="text-pink-200 text-base sm:text-lg md:text-xl animate-fade-in-up">
              Something enchanting awaits you...
            </p>
            <div className="mt-6 sm:mt-8">
              <div className="animate-float text-3xl sm:text-4xl">💖</div>
            </div>
          </div>
        )}

        {/* Stage 1: Date Display */}
        {stage >= 1 && (
          <div className={`mb-6 sm:mb-8 md:mb-12 ${stage === 1 ? 'animate-magical-reveal' : ''}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl transform transition-all duration-1000 hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-gentle-float">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mb-2 sm:mb-4 animate-rainbow-glow leading-tight bg-size-200 animate-gradient-shift">
                {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-pink-200 font-light animate-shimmer">
                A Magical Day ✨
              </p>
              <div className="mt-3 sm:mt-4 flex justify-center space-x-2">
                <div className="animate-bounce-1 text-lg sm:text-xl">🌟</div>
                <div className="animate-bounce-2 text-lg sm:text-xl">💫</div>
                <div className="animate-bounce-3 text-lg sm:text-xl">⭐</div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 2: Name Display */}
        {stage >= 2 && (
          <div className={`mb-6 sm:mb-8 md:mb-12 ${stage === 2 ? 'animate-love-reveal' : ''}`}>
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-pink-300/30 shadow-2xl transform transition-all duration-1000 hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-heartbeat-gentle">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 animate-text-glow leading-tight">
                Happy Birthday
              </h2>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-yellow-400 animate-love-pulse bg-size-200 animate-gradient-flow leading-tight">
                My Beautiful Love ❤️
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-200 mt-2 sm:mt-4 animate-gentle-pulse leading-relaxed">
                You make every moment magical ✨
              </p>
              <div className="mt-3 sm:mt-4 flex justify-center space-x-1 sm:space-x-2">
                <div className="animate-heart-1 text-base sm:text-lg">💕</div>
                <div className="animate-heart-2 text-base sm:text-lg">💖</div>
                <div className="animate-heart-3 text-base sm:text-lg">💝</div>
                <div className="animate-heart-4 text-base sm:text-lg">💗</div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Photo Display */}
        {stage >= 3 && (
          <div className={`${stage === 3 ? 'animate-photo-reveal' : ''}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl transform transition-all duration-1000 hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-gentle-sway">
              <div className="relative mb-4 sm:mb-6">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Beautiful moment"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto animate-photo-glow shadow-2xl border-2 sm:border-4 border-pink-300/50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent animate-shimmer-overlay"></div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-2xl sm:text-3xl md:text-4xl animate-spin-magical">
                  💕
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 text-2xl sm:text-3xl md:text-4xl animate-bounce-magical">
                  🎂
                </div>
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-xl sm:text-2xl md:text-3xl animate-twinkle-magical">
                  ✨
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 text-xl sm:text-2xl md:text-3xl animate-float-magical">
                  🌹
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4 animate-love-glow leading-tight">
                Forever & Always 💖
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-pink-200 max-w-xs sm:max-w-sm md:max-w-md mx-auto leading-relaxed animate-text-shimmer">
                Another year of love, laughter, and beautiful memories together. 
                Here's to many more magical moments! 🥂✨
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center space-x-2 sm:space-x-3">
                <div className="animate-celebration-1 text-lg sm:text-xl">🎉</div>
                <div className="animate-celebration-2 text-lg sm:text-xl">🎊</div>
                <div className="animate-celebration-3 text-lg sm:text-xl">🥳</div>
                <div className="animate-celebration-4 text-lg sm:text-xl">🎈</div>
              </div>
            </div>
          </div>
        )}

        {/* Continue message after all stages */}
        {stage >= 3 && (
          <div className="mt-6 sm:mt-8 animate-gentle-pulse">
            <p className="text-pink-300 text-xs sm:text-sm md:text-base">
              Tap anywhere to experience the magic again ✨
            </p>
          </div>
        )}

        {/* Next stage hint */}
        {stage > 0 && stage < 3 && (
          <div className="mt-6 sm:mt-8 animate-gentle-bounce">
            <p className="text-pink-300 text-sm sm:text-base md:text-lg">
              Tap for more magic... 💖
            </p>
          </div>
        )}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`emoji-${i}`}
            className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-magical-float"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            {['💝', '🌹', '💕', '⭐', '🎉', '💖', '✨', '🌟', '💗', '🎊', '💫', '🥰'][i]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;