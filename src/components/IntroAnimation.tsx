import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TITLE = '</Titus>';
const QUOTE = 'An Idiot in Motion is faster than a Genius at rest';
const ATTRIBUTION = "- Newton's 4th Law of Motion";
const TYPING_DURATION = 3500; // 3.5 seconds (twice as fast)
const TOTAL_CHARS = TITLE.length + QUOTE.length + ATTRIBUTION.length;
const CHAR_INTERVAL = TYPING_DURATION / TOTAL_CHARS;

export function IntroAnimation() {
  const [charCount, setCharCount] = useState(0);
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = 'hidden';

    if (charCount >= TOTAL_CHARS) {
      const timer = setTimeout(() => {
        setShowCover(false);
        document.body.style.overflow = '';
      }, 5500); // roll up at 9s total (3.5s typing + 5.5s delay)
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    const interval = setInterval(() => {
      setCharCount((prev) => Math.min(prev + 1, TOTAL_CHARS));
    }, CHAR_INTERVAL);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [charCount]);

  const titleChars = Math.min(charCount, TITLE.length);
  const quoteChars = Math.min(Math.max(charCount - TITLE.length, 0), QUOTE.length);
  const attrChars = Math.min(
    Math.max(charCount - TITLE.length - QUOTE.length, 0),
    ATTRIBUTION.length
  );

  const isTitleDone = titleChars >= TITLE.length;
  const isQuoteDone = quoteChars >= QUOTE.length;
  const isAttrDone = attrChars >= ATTRIBUTION.length;

  return (
    <AnimatePresence>
      {showCover && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#282C33]"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center px-6 max-w-4xl">
            {/* Title — larger, gradient mix */}
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#C778DD] via-[#61AFEF] to-[#C778DD] bg-clip-text text-transparent">
                {TITLE.slice(0, titleChars)}
              </span>
              {!isTitleDone && (
                <span className="text-white animate-pulse ml-1">▌</span>
              )}
            </motion.h1>

            {/* Quote — white */}
            <motion.p className="text-lg sm:text-xl md:text-2xl text-white mb-4 leading-relaxed">
              {QUOTE.slice(0, quoteChars)}
              {isTitleDone && !isQuoteDone && (
                <span className="text-white animate-pulse">▌</span>
              )}
            </motion.p>

            {/* Attribution — white */}
            <motion.p className="text-base sm:text-lg md:text-xl text-white">
              {ATTRIBUTION.slice(0, attrChars)}
              {isQuoteDone && !isAttrDone && (
                <span className="text-white animate-pulse">▌</span>
              )}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
