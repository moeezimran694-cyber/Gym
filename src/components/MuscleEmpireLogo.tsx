import React from 'react';

export const MUSCLE_EMPIRE_LOGO_URL = 'https://cdn.phototourl.com/free/2026-08-13-ab398168-65af-4fc4-ade1-48118bd3a15f.jpg';

interface MuscleEmpireLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  darkText?: boolean;
}

export const MuscleEmpireLogo: React.FC<MuscleEmpireLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  darkText = true,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg xl:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 shrink-0 select-none ${className}`}>
      {/* Circular Logo Image */}
      <div className={`${sizeClasses[size]} rounded-full bg-white overflow-hidden shadow-xs flex items-center justify-center shrink-0 border border-neutral-200`}>
        <img
          src={MUSCLE_EMPIRE_LOGO_URL}
          alt="Muscle Empire GYM Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-black ${textClasses[size]} tracking-tight whitespace-nowrap ${darkText ? 'text-neutral-900' : 'text-white'}`}>
            MUSCLE <span className="text-red-600 font-black">EMPIRE</span> GYM
          </div>
          <div className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-wider whitespace-nowrap mt-1">
            BUILD STRENGTH • MANAWALA
          </div>
        </div>
      )}
    </div>
  );
};

