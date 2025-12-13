import React from 'react';

export default function Scaling({ 
  width = 64, 
  height = 64, 
  color = "currentColor",
  className = ""
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width}
      height={height}
      viewBox="0 0 64 64"
      className={className}
      fill={color}
    >
      <path d="M8.67 40.17 36 24.47l.91 1.59a1 1 0 0 0 1.83-.24l1-3.86a1 1 0 0 0-.7-1.23l-3.86-1a1 1 0 0 0-1.13 1.46l.95 1.55-27.33 15.7z"/>
      <path d="M60 61a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1h-6V4a1 1 0 0 0-1.47-.88l-13 7a1 1 0 0 0 0 1.78L52 17.79V24h-6a1 1 0 0 0-1 1v9H32a1 1 0 0 0-1 1v8H18a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1z"/>
    </svg>
  );
}