import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png"; // Adjust the path as needed

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading progress
    const loadingStages = [
      { progress: 20, delay: 300 },
      { progress: 40, delay: 600 },
      { progress: 60, delay: 900 },
      { progress: 80, delay: 1200 },
      { progress: 100, delay: 1500 },
    ];

    let isMounted = true;
    let currentStage = 0;

    const loadNextStage = () => {
      if (currentStage < loadingStages.length && isMounted) {
        const stage = loadingStages[currentStage];
        setTimeout(() => {
          if (isMounted) {
            setProgress(stage.progress);
            currentStage++;
            loadNextStage();
          }
        }, stage.delay);
      }
    };

    loadNextStage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50/20 z-[9999]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full translate-x-1/2 translate-y-1/2 opacity-10 blur-3xl animate-pulse animation-delay-1000"></div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Logo Container with Animation */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl animate-pulse opacity-20 blur-xl"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white flex items-center justify-center">
            <img
              src={Logo}
              alt="Ivoire Bauhaus"
              className="w-20 h-20 md:w-24 md:h-24 object-contain p-3 transition-transform duration-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            />
          </div>
          {/* Glowing ring around logo */}
          <div className="absolute inset-0 rounded-2xl border-4 border-teal-400/20 animate-ping"></div>
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal-400 to-emerald-500 opacity-25 blur-xl"></div>
        </div>

        {/* Modern Loader with Progress */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-16 h-16 md:w-20 md:h-20 border-3 border-transparent border-t-teal-500 border-r-teal-500 rounded-full animate-spin"></div>

          {/* Inner rotating ring */}
          <div className="absolute top-2 left-2 w-12 h-12 md:w-16 md:h-16 border-2 border-transparent border-b-emerald-500 border-l-emerald-500 rounded-full animate-spin animation-delay-500"></div>

          {/* Center progress indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full border-2 border-teal-400 flex items-center justify-center shadow-lg">
              <span className="text-sm md:text-base font-bold text-teal-600">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Loading Text with dynamic messages */}
        <p className="mt-6 text-lg md:text-xl font-medium text-slate-800 tracking-tight text-center px-4">
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent font-bold">
            {progress < 30
              ? "Initialisation..."
              : progress < 60
              ? "Chargement..."
              : progress < 90
              ? "Optimisation..."
              : "Presque prêt !"}
          </span>
        </p>

        {/* Real Progress Bar - faster animation */}
        <div className="mt-6 w-64 h-2 bg-slate-200 rounded-full overflow-hidden relative shadow-sm">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-200 ease-out absolute left-0 top-0"
            style={{ width: `${progress}%` }}
          ></div>
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1s_infinite]"
            style={{ transform: `translateX(${progress - 100}%)` }}
          ></div>
        </div>

        {/* Progress details */}
        <div className="mt-3 text-sm text-slate-600 font-medium">
          {progress < 30
            ? "Démarrage..."
            : progress < 60
            ? "Resources en cours..."
            : progress < 90
            ? "Interface en préparation..."
            : "Derniers ajustements..."}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
