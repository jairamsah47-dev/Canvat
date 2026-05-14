'use client';

import React from 'react';

const Cube3D = () => {
  return (
    <div className="relative group perspective-1000">
      <div className="cube-container scale-75 lg:scale-100">
        <div className="cube">
          <div className="cube-face front">GoWebpy</div>
          <div className="cube-face back">Converter</div>
          <div className="cube-face left">Fast</div>
          <div className="cube-face right">Free</div>
          <div className="cube-face top">Red</div>
          <div className="cube-face bottom">Tools</div>
        </div>
        <div className="cube-shadow"></div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[50px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 blur-[50px] animate-pulse transition-all duration-300"></div>
    </div>
  );
};

export default Cube3D;
