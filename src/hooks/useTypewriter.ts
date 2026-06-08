import { useState, useEffect } from 'react';

// Interface for the hook props
interface UseTypewriterProps {
  text: string;
  speed?: number; // Speed of typing (default: 100ms)
  deleteSpeed?: number; // Speed of deletion (default: 50ms)
  delayBefore?: number; // Delay before deletion or restarting (default: 1000ms)
  loop?: boolean; // Whether it should loop (default: true)
}

// Hook
export const useTypewriter = ({
  text,
  speed = 100,
  deleteSpeed = 50,
  delayBefore = 1000,
  loop = true,
}: UseTypewriterProps): string => {
  const [displayText, setDisplayText] = useState(''); // Current text displayed
  const [direction, setDirection] = useState<'typing' | 'deleting'>('typing'); // Typing or deleting

  useEffect(() => {

    // Function to update the text displayed
    const updateText = () => {
      if (direction === 'typing') {
        if (displayText.length < text.length) {
          setDisplayText((prev) => text.slice(0, prev.length + 1));
        } else {
          // Completed typing; wait before deleting
          if (loop) {
            setTimeout(() => setDirection('deleting'), delayBefore);
          }
        }
      } else if (direction === 'deleting') {
        if (displayText.length > 0) {
          setDisplayText((prev) => text.slice(0, prev.length - 1));
        } else {
          // Completed deleting; restart typing if looping
          setDirection('typing');
        }
      }
    };

    // Set timeout for the next update based on the direction (typing or deleting)
    const timeout = setTimeout(updateText, direction === 'typing' ? speed : deleteSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout to prevent memory leaks
  }, [displayText, direction, text, speed, deleteSpeed, delayBefore, loop]);

  // Return the current text being displayed
  return displayText;
};