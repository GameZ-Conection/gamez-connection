import React from "react";

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color = "bg-orange-500" }) => {
  return (
    <div className="progress-bar mb-4">
      <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
        <span>{label.toUpperCase()}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 h-4 rounded-md overflow-hidden">
        <div
          className={`progress-fill ${color} h-4 rounded-md transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
