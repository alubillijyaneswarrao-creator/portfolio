import React from 'react';

export const TechIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] h-[450px] mx-auto flex items-center justify-center">
      {/* Background glowing rings */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-blue-500/10 dark:border-blue-500/5 animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/20 dark:border-cyan-500/10 animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute w-[200px] h-[200px] rounded-full border border-indigo-500/30 dark:border-indigo-500/15 animate-[spin_20s_linear_infinite]" />

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:drop-shadow-[0_0_50px_rgba(6,182,212,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core processor grid (AI focus) */}
        <rect x="140" y="140" width="120" height="120" rx="16" fill="url(#coreGradient)" stroke="url(#borderGradient)" strokeWidth="2" />
        
        {/* Network connections */}
        <g stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4 4">
          {/* North */}
          <line x1="200" y1="140" x2="200" y2="70" />
          {/* South */}
          <line x1="200" y1="260" x2="200" y2="330" />
          {/* West */}
          <line x1="140" y1="200" x2="70" y2="200" />
          {/* East */}
          <line x1="260" y1="200" x2="330" y2="200" />
          
          {/* Diagonals */}
          <line x1="145" y1="145" x2="95" y2="95" />
          <line x1="255" y1="145" x2="305" y2="95" />
          <line x1="145" y1="255" x2="95" y2="305" />
          <line x1="255" y1="255" x2="305" y2="305" />
        </g>

        {/* Nodes / Data Points */}
        <circle cx="200" cy="70" r="10" fill="#2563EB" />
        <circle cx="200" cy="70" r="18" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" className="animate-pulse" />
        
        <circle cx="200" cy="330" r="10" fill="#06B6D4" />
        <circle cx="200" cy="330" r="18" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" className="animate-pulse" />

        <circle cx="70" cy="200" r="10" fill="#2563EB" />
        <circle cx="70" cy="200" r="18" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" className="animate-pulse" />

        <circle cx="330" cy="200" r="10" fill="#06B6D4" />
        <circle cx="330" cy="200" r="18" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" className="animate-pulse" />

        {/* Diagonal nodes */}
        <circle cx="95" cy="95" r="8" fill="#10B981" />
        <circle cx="305" cy="95" r="8" fill="#6366F1" />
        <circle cx="95" cy="305" r="8" fill="#F59E0B" />
        <circle cx="305" cy="305" r="8" fill="#3B82F6" />

        {/* Inside Core: Floating Code / AI nodes */}
        <circle cx="200" cy="200" r="28" fill="url(#coreGlow)" />
        <path d="M192 190L184 198L192 206M208 190L216 198L208 206M202 188L198 208" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Floating tech panels */}
        {/* Top-Left Code Card */}
        <g transform="translate(35, 105)" className="animate-bounce" style={{ animationDuration: '6s' }}>
          <rect width="90" height="45" rx="8" fill="url(#cardBg)" stroke="url(#borderGradient)" strokeWidth="1" />
          <rect x="8" y="10" width="12" height="12" rx="3" fill="#EF4444" />
          <line x1="26" y1="12" x2="70" y2="12" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="26" y1="20" x2="80" y2="20" stroke="#94A3B8" strokeWidth="2" />
          <line x1="8" y1="28" x2="60" y2="28" stroke="#64748B" strokeWidth="1.5" />
          <line x1="8" y1="34" x2="45" y2="34" stroke="#64748B" strokeWidth="1.5" />
        </g>

        {/* Bottom-Right Graph Card */}
        <g transform="translate(265, 230)" className="animate-bounce" style={{ animationDuration: '8s' }}>
          <rect width="100" height="60" rx="8" fill="url(#cardBg)" stroke="url(#borderGradient)" strokeWidth="1" />
          {/* Micro chart */}
          <path d="M12 45L30 35L48 40L66 25L88 15" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 45L30 35L48 40L66 25L88 15V48H12V45Z" fill="url(#chartFill)" />
          {/* Target marker */}
          <circle cx="88" cy="15" r="3" fill="#06B6D4" />
          <circle cx="88" cy="15" r="7" stroke="#06B6D4" strokeWidth="1" opacity="0.4" className="animate-ping" />
        </g>

        {/* Top-Right AI Node Grid */}
        <g transform="translate(275, 45)" className="animate-bounce" style={{ animationDuration: '7s' }}>
          <rect width="80" height="50" rx="8" fill="url(#cardBg)" stroke="url(#borderGradient)" strokeWidth="1" />
          {/* Binary or tiny grid */}
          <text x="10" y="20" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">0101</text>
          <text x="10" y="32" fill="#2563EB" fontSize="10" fontFamily="monospace" fontWeight="bold">MODEL</text>
          <circle cx="65" cy="25" r="6" fill="#10B981" />
          <line x1="45" y1="25" x2="59" y2="25" stroke="#E2E8F0" strokeWidth="1" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="coreGradient" x1="140" y1="140" x2="260" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="borderGradient" x1="140" y1="140" x2="260" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cardBg" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="chartFill" x1="50%" y1="15" x2="50%" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
