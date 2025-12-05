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
        if (i < text.length) {
          setDisplayedText((prev) => prev + text[i]);
          i++;
        } else {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, typingSpeed, delay]);

  // Logic to dynamically apply primary color styling to 'Yassin Boufous'
  const name = "Yassin Boufous";
  const nameIndex = text.indexOf(name);

  const renderText = () => {
    if (nameIndex === -1 || displayedText.length < nameIndex) {
      // Name not found or typing hasn't reached the name yet
      return displayedText;
    }

    // Typing has reached or passed the start of the name
    const preName = text.substring(0, nameIndex); // "Hi, I'm "
    
    // Determine how much of the name has been typed
    const nameTypedLength = Math.min(displayedText.length - nameIndex, name.length);
    const namePart = name.substring(0, nameTypedLength);
    
    // Determine the text typed after the name
    const postNamePart = displayedText.substring(nameIndex + name.length);

    return (
      <>
        {preName}
        <span className="text-primary">
          {namePart}
        </span>
        {postNamePart}
      </>
    );
  };

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      {renderText()}
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