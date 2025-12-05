import React, { useState, useEffect } from "react";

interface TypingEffectTitleProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
}

const TypingEffectTitle: React.FC<TypingEffectTitleProps> = ({
  text,
  typingSpeed = 100,
  delay = 500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[i]);
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, typingSpeed, delay]);

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      {displayedText}
      <span 
        className={`inline-block w-1 h-10 md:h-14 bg-foreground align-middle ml-1 transition-opacity duration-500 ${
          isTypingComplete ? "opacity-0" : "animate-pulse"
        }`}
      >
        &nbsp;
      </span>
    </h1>
  );
};

export default TypingEffectTitle;