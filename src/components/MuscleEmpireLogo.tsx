import React, { useState } from 'react';
import localLogo from '../assets/images/muscle_empire_logo.jpg';

export const MUSCLE_EMPIRE_LOGO_URL = localLogo;

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
  const [imgFailed, setImgFailed] = useState(false);

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg xl:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 shrink-0 select-none ${className}`}>
      {/* Circular Logo Container with shadow & border */}
      <div
        className={`${sizeClasses[size]} rounded-full bg-neutral-950 overflow-hidden shadow-md flex items-center justify-center shrink-0 border-2 border-neutral-200 relative group`}
      >
        {!imgFailed ? (
          <img
            src={localLogo}
            alt="Muscle Empire GYM"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* High-fidelity Vector Gym Emblem Fallback */
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950 flex flex-col items-center justify-center text-white p-1">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-sm"
            >
              <circle cx="20" cy="20" r="18" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Dumbbell Icon */}
              <rect x="18" y="10" width="4" height="20" rx="1.5" fill="#f87171" />
              <rect x="11" y="14" width="3" height="12" rx="1" fill="#dc2626" />
              <rect x="8" y="16" width="3" height="8" rx="0.5" fill="#ffffff" />
              <rect x="26" y="14" width="3" height="12" rx="1" fill="#dc2626" />
              <rect x="29" y="16" width="3" height="8" rx="0.5" fill="#ffffff" />
              {/* Monogram ME */}
              <text
                x="20"
                y="36"
                textAnchor="middle"
                fontSize="6"
                fontWeight="900"
                fill="#ffffff"
                letterSpacing="0.5"
              >
                M•E
              </text>
            </svg>
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div
            className={`font-black ${textClasses[size]} tracking-tight whitespace-nowrap ${
              darkText ? 'text-neutral-900' : 'text-white'
            }`}
          >
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
