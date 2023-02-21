import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  // Initialize variables to hold the final messages to be displayed to the player
  let finalMessage = '';
  let finalMessageRevealWord = '';
  // Initialize a flag to control whether the game is still playable
  let playable = true;

  // Check whether the player has won or lost the game
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulation! You won! :)';
    // Set the playable flag to false if the player has won
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. :(';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    // Set the playable flag to false if the player has lost
    playable = false;
  }

  // Call the setPlayable function to update the state of the parent component
  useEffect(() => setPlayable(playable));

  // Render the popup container if the final message is not empty
  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        {/* Display the final message to the player */}
        <h2>{finalMessage}</h2>
        {/* If the player lost, reveal the hidden word */}
        <h3>{finalMessageRevealWord}</h3>
        {/* Render a button to allow the player to play again */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;





