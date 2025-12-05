import React, { useState, useEffect } from "react";

interface TypingEffectTitleProps {
  staticPrefix: string; // e.g., "Hi, I'm Yassin Boufous, a "
  roles: string[]; // e.g., ["Full Stack Developer", "React Expert", "Problem Solver"]
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingEffectTitle: React.FC<TypingEffectTitleProps> = ({
  staticPrefix,
  roles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          timeoutId = setTimeout(handleTyping, typingSpeed);
        } else {
          // Typing complete, start pause
          setIsTypingComplete(true);
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
            setIsTypingComplete(false);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          timeoutId = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Deleting complete, switch role and start typing again
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          // State change triggers re-run of useEffect, restarting the loop
        }
      }
    };

    // Start the loop
    handleTyping();

    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex, isDeleting, displayedText, roles, typingSpeed, deletingSpeed, pauseTime]);

  // Render logic
  const renderTitle = () => {
    return (
      <>
        {staticPrefix}
        <span className="text-primary font-extrabold">
          {displayedText}
        </span>
      </>
    );
  };

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      {renderTitle()}
      <span 
        className={`inline-block w-1 h-10 md:h-14 bg-foreground align-middle ml-1 transition-opacity duration-500 ${
          isTypingComplete && !isDeleting ? "opacity-0" : "animate-pulse"
        }`}
      >
        &nbsp;
      </span>
    </h1>
  );
};

export default TypingEffectTitle;