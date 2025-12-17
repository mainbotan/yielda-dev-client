'use client';

import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-markup';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import Copy from '@/assets/ui-kit/icons/copy';

type CodeBlockProps = {
  code: string;
  lang: string;
};

const CodeBlock = ({ code, lang }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, lang]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      
      // Сбрасываем состояние через 2 секунды
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea');
      textArea.value = code.trim();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className='code-block'>
        <div className='_meta'>
            <span className='lang'>
                <span className='name'>{lang}</span>
            </span>
            <span className='actions'>
                <button
                  onClick={handleCopy}
                  className='action'
                  aria-label={copied ? 'Скопировано' : 'Скопировать код'}
                  title={copied ? 'Скопировано!' : 'Скопировать код'}
                >
                    <span className='icon'>
                        <Copy className='svg' />
                    </span>
                    {copied && (
                      <span className='copied-text'>
                        Скопировано!
                      </span>
                    )}
                </button>
            </span>
        </div>
        <pre>
        <code ref={codeRef} className={clsx(`language-${lang}`)}>
            {code.trim()}
        </code>
        </pre>
    </div>
  );
};

export default CodeBlock;