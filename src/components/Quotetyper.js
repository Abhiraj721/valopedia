import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import valorantQuotes from './Valoquotes';
import "./navigatecard.css"
export default function Quotetyper() {
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const typedQuote = new Typed(quoteRef.current, {
      strings: [`"`+valorantQuotes[currentQuoteIndex].quote+`"`],
      typeSpeed: 85,
      onComplete: () => {
        // Animation completed, update the current quote index
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % valorantQuotes.length);
      },
    });

    return () => {
      typedQuote.destroy();
    };
  }, [currentQuoteIndex]);

  useEffect(() => {
    // Update the author whenever the quote changes
    const currentQuote = valorantQuotes[currentQuoteIndex];
    authorRef.current.textContent = `- ${currentQuote.author}`;
  }, [currentQuoteIndex]);

  return (
    <div>
      <div className='quote container'>
      <span
      className='quotetext'
        ref={quoteRef}
        style={{
        // Display as inline block to show cursor
          marginRight: '5px', // Add spacing between cursor and text
        }}
      ></span>
      <br />
      <span
      className='authortext'
        ref={authorRef}
        style={{
          fontStyle: 'italic',
        }}
      ></span>
      </div>
    </div>
  );
}
