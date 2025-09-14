
import { useState, useEffect } from 'react';

const TerminalWidget = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  const terminalLines = [
    "$ whoami",
    "Software Engineer & AI Specialist",
    "",
    "$ ls skills/",
    "python/  javascript/  react/  node.js/  tensorflow/",
    "pytorch/  docker/  aws/  fastapi/  flask/",
    "mern-stack/  competitive-programming/",
    "",
    "$ cat mission.txt",
    "Building AI solutions that make a real impact",
    "Mentoring the next generation of developers",
    "",
    "$ status",
    "Ready to collaborate! 🚀"
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        const line = terminalLines[currentLine];
        if (currentChar <= line.length) {
          setDisplayedText(prev => {
            const newText = [...prev];
            newText[currentLine] = line.substring(0, currentChar);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      }, currentChar === 0 ? 500 : 50);

      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, terminalLines]);

  return (
    <div className="neo-card p-6 font-fira-code text-sm max-w-md mx-auto lg:mx-0">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        <span className="text-muted-foreground ml-2">terminal</span>
      </div>
      
      <div className="space-y-1">
        {displayedText.map((line, index) => (
          <div key={index} className="min-h-[1.2rem]">
            {line.startsWith('$') ? (
              <span className="text-sky-400">{line}</span>
            ) : line.includes('Engineer') ? (
              <span className="text-emerald-500">{line}</span>
            ) : line.includes('python') || line.includes('skills') ? (
              <span className="text-yellow-400">{line}</span>
            ) : line.includes('🚀') ? (
              <span className="text-cyan-400">{line}</span>
            ) : (
              <span className="text-foreground">{line}</span>
            )}
          </div>
        ))}
        {currentLine < terminalLines.length && (
          <span className="animate-terminal-blink text-sky-400">█</span>
        )}
      </div>
    </div>
  );
};

export default TerminalWidget;
