import React from 'react'

const Figure = ({wrongLetters}) => {
  // Calculate the number of errors based on the length of the wrongLetters array
  const errors = wrongLetters.length;
  // Render the SVG container with a fixed height and width
    return (
        <svg height="250" width="200" className="figure-container">
        {/* Render the rod of the hangman figure */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />
        {/* Render the head of the hangman figure if there is at least 1 error */}
        {errors > 0 && <circle cx="140" cy="70" r="20"  />}
        {/* Render the body of the hangman figure if there are at least 2 errors */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150"  />}
        {/* Render the arms of the hangman figure if there are at least 3 errors */}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100"  />}
        {errors > 3 && <line x1="140" y1="120" x2="160" y2="100"  />}
        {/* Render the legs of the hangman figure if there are at least 4 errors */}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180"  />}
        {errors > 5 && <line x1="140" y1="150" x2="160" y2="180"  />}
      </svg>
        
    )
}
export default Figure