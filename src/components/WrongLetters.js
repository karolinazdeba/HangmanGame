import React from 'react'

// This component displays the letters that have been guessed incorrectly
const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {/* If there are any wrong letters, display the heading */}
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {/* Map over the array of wrong letters to create a span for each letter */}
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    // Use the reduce function to add commas between the letters
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ',' , curr], null)}
            </div>
        </div>
    )
}
export default WrongLetters


