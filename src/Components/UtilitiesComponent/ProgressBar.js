import React from 'react';

const ProgressBar = ({ progressPercentage }) => {
  const maxPoints = 5;
  const barWidth = `${(progressPercentage / maxPoints) * 100}%`;

  return (
    <div className="flex items-center">
      <div className="h-1 w-44 bg-gray-300">
        <div
          style={{ width: barWidth }}
          className={`h-full ${
            progressPercentage < 3 ? 'bg-gray-600' : 'bg-slate-600'
          }`}
        ></div>
      </div>
      <span className="ml-2">{progressPercentage}</span>
    </div>
  );
};

export default ProgressBar;
