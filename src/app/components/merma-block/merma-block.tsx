'use client';

import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export const MermaidBlock: React.FC<{
  definition: string;
  initialMode?: 'code' | 'preview';
}> = ({ definition, initialMode = 'code' }) => {
  const [mode, setMode] = useState(initialMode);
  const [error, setError] = useState<string | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      theme: 'dark',
      startOnLoad: false,
      securityLevel: 'loose',
    });
  }, []);

  useEffect(() => {
    if (mode === 'preview' && diagramRef.current) {
      try {
        setError(null);
        // Очищаем предыдущий рендер
        diagramRef.current.innerHTML = definition;
        mermaid.init(undefined, diagramRef.current);
      } catch (err) {
        setError(`Render error: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }, [mode, definition]);

  return (
    <div className="mermaid-viewer">
      <div className="mermaid-controls">
        <button 
          onClick={() => setMode('code')}
          aria-selected={mode === 'code'}
          className="control-button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
          </svg>
          Код
        </button>
        <button 
          onClick={() => setMode('preview')}
          aria-selected={mode === 'preview'}
          className="control-button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"/>
          </svg>
          Визуализация
        </button>
      </div>

      {mode === 'code' ? (
        <pre className="mermaid-code">{definition}</pre>
      ) : error ? (
        <div className="mermaid-error">
          <div>{error}</div>
          <pre>{definition}</pre>
        </div>
      ) : (
        <div ref={diagramRef} className="mermaid-diagram" />
      )}
    </div>
  );
};