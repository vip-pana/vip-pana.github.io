import { useState, useEffect } from 'react';

export const LabelWrapper = () => {
  const fullText = 'Software Engineer';
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent">
      {displayed}
      <span
        className={`inline-block w-[3px] h-[1em] bg-nord-accent ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
      />
    </span>
  );
};
