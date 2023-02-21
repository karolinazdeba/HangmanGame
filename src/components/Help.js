import React from 'react';

const Help = () => {
  return (
    <div className="help-container">
      <h2>How to play Hangman</h2>
      <p>Hangman is a game where the player must guess a word by suggesting letters within a certain number of guesses.</p>
      <p>To make a guess, use the keyboard to type a letter.</p>
      <p>If the letter is in the word, it will be added to the list of correct letters.</p>
      <p>If the letter is not in the word, it will be added to the list of wrong letters and the hangman figure will be drawn.</p>
      <p>The game ends when the player guesses the word correctly, or runs out of guesses and the hangman is fully drawn.</p>
    </div>
  );
};

export default Help;
