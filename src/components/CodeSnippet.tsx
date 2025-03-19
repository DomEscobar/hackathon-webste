import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CodeSnippetProps {
  code: string;
  language?: string;
  delay?: number;
  className?: string;
  typingSpeed?: number;
  highlight?: string[];
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'javascript',
  delay = 0,
  className = '',
  typingSpeed = 30,
  highlight = []
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    // Start typing after delay
    timeout = setTimeout(() => {
      setIsTyping(true);
      
      let currentIndex = 0;
      const codeLength = code.length;
      
      const type = () => {
        if (currentIndex < codeLength) {
          setDisplayedCode(code.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };
      
      type();
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [code, delay, typingSpeed]);
  
  // Blinking cursor effect
  useEffect(() => {
    let cursorInterval: ReturnType<typeof setInterval>;
    
    if (!isTyping && displayedCode.length === code.length) {
      cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);
    }
    
    return () => clearInterval(cursorInterval);
  }, [isTyping, displayedCode, code]);
  
  // Function to add syntax highlighting
  const formatCode = () => {
    let formattedCode = displayedCode;
    
    // Apply simple syntax highlighting
    formattedCode = formattedCode
      // Keywords
      .replace(/(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)/g, '<span class="text-pink-400">$1</span>')
      // Numbers
      .replace(/(\d+)/g, '<span class="text-amber-400">$1</span>')
      // Strings
      .replace(/(['"`])(.*?)(['"`])/g, '<span class="text-green-400">$1$2$3</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      // Brackets, parentheses
      .replace(/([{}[\]()])/g, '<span class="text-cyan-300">$1</span>')
      // Functions
      .replace(/(\w+)(?=\s*\()/g, '<span class="text-yellow-300">$1</span>');
    
    // Apply custom highlighting for specific terms
    highlight.forEach(term => {
      const regex = new RegExp(`(${term})`, 'g');
      formattedCode = formattedCode.replace(regex, '<span class="text-purple-400 font-bold">$1</span>');
    });
    
    return formattedCode;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`bg-gray-900/80 backdrop-filter backdrop-blur-sm rounded-md border border-gray-700 overflow-hidden ${className}`}
    >
      {/* Code header with language tag */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">{language}</div>
      </div>
      
      {/* Code content */}
      <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
        <code 
          dangerouslySetInnerHTML={{ __html: formatCode() + (cursorVisible ? '<span class="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse"></span>' : '') }} 
        />
      </pre>
      
      {/* Line numbers */}
      <div className="absolute top-10 left-0 bottom-0 w-8 flex flex-col items-center bg-gray-800/30 border-r border-gray-700/50">
        {displayedCode.split('\n').map((_, i) => (
          <div key={i} className="text-xs text-gray-500 leading-5 h-5">{i + 1}</div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeSnippet; 