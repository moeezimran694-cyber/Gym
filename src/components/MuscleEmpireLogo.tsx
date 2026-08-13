import React from 'react';
import logoImg from '../assets/images/muscle_empire_logo.jpg';

interface MuscleEmpireLogoProps {
  size?: 'sm' | 'md' | 'lg';
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
  };

  const textClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-lg bg-black overflow-hidden shadow-sm flex items-center justify-center shrink-0 border border-neutral-800`}>
        <img
          src={logoImg}
          alt="Muscle Empire GYM Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-extrabold ${textClasses[size]} tracking-tight ${darkText ? 'text-neutral-900' : 'text-white'}`}>
            MUSCLE <span className="text-red-600">EMPIRE</span> GYM
          </span>
          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest -mt-0.5">
            BUILD STRENGTH • MANAWALA
          </span>
        </div>
      )}
    </div>
  );
};
