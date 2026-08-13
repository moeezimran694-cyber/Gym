import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Flame, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

interface FitnessToolsProps {
  onOpenJoinModal: () => void;
}

export const FitnessTools: React.FC<FitnessToolsProps> = ({ onOpenJoinModal }) => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'strength'>('muscle');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  const getBMICategory = (num: number) => {
    if (num < 18.5) return { category: 'Underweight', color: 'text-amber-600' };
    if (num < 25) return { category: 'Normal / Healthy', color: 'text-emerald-600' };
    if (num < 30) return { category: 'Overweight', color: 'text-orange-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  const bmiInfo = getBMICategory(parseFloat(bmi));

  // Estimated Calories for Strength/Fitness Training at SMARTGYM
  const baseCal = weight * 24;
  const goalCal = goal === 'muscle' ? Math.round(baseCal * 1.4 + 300) : goal === 'fatloss' ? Math.round(baseCal * 1.3 - 400) : Math.round(baseCal * 1.45);

  return (
    <section className="py-20 px-4 sm:px-8 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-[11px] font-bold tracking-widest uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-red-500" />
            FITNESS METRICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase leading-[1.05] mb-2">
            CALCULATE YOUR BASICS.
          </h2>
          <p className="text-xs font-normal text-neutral-600">
            Estimate your Body Mass Index and daily training calorie target before starting at SMARTGYM.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 shadow-xs max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="md:col-span-7 space-y-5">
            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-800 uppercase mb-2">
                <span>Height (cm):</span>
                <span className="font-extrabold text-neutral-900 text-sm">{height} cm</span>
              </div>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-800 uppercase mb-2">
                <span>Weight (kg):</span>
                <span className="font-extrabold text-neutral-900 text-sm">{weight} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="140"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
              />
            </div>

            {/* Goal Choice */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 uppercase mb-2">
                Primary Fitness Goal:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['muscle', 'fatloss', 'strength'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      goal === g
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {g === 'muscle' ? 'Muscle' : g === 'fatloss' ? 'Fat Loss' : 'Strength'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="md:col-span-5 p-6 rounded-xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                ESTIMATED RESULTS
              </div>

              {/* BMI Output */}
              <div className="mb-4">
                <div className="text-3xl font-extrabold text-neutral-900 tracking-tight leading-none mb-1">
                  {bmi} <span className="text-xs font-bold text-neutral-400 uppercase">BMI</span>
                </div>
                <div className={`text-xs font-semibold ${bmiInfo.color}`}>
                  Category: {bmiInfo.category}
                </div>
              </div>

              {/* Calorie Output */}
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 mb-6">
                <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  DAILY TARGET CALORIES
                </div>
                <div className="text-2xl font-extrabold text-neutral-900">
                  ~{goalCal} <span className="text-xs font-normal text-neutral-500">kcal / day</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenJoinModal}
              className="w-full py-3 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>CLAIM FREE CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
