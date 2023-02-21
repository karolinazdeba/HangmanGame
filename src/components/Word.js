import React from 'react'

// This component takes in the selected word and the letters that have been guessed correctly
const Word = ({ selectedWord, correctLetters }) => {
    // The selected word is split into an array of letters and then mapped over to create a span for each letter
    return (
        <div className="word">
            {selectedWord.split('').map( (letter, i) => {
                // If the letter is in the array of correctLetters, display the letter in the span
                // Otherwise, display an empty string
                return (
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
                )
            })}
        </div>
    )
}
export default Word


