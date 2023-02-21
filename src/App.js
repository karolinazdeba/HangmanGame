import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import { showNotification as show } from './helpers/helpers';


import './App.css';

const words = ['application', 'programming', 'javascript', 'react']; // Choose a word at random from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true); // Whether the game is currently playable
  const [correctLetters, setCorrectLetters] = useState([]); // Letters that the user has guessed correctly
  const [wrongLetters, setwrongLetters] = useState([]); // Letters that the user has guessed incorrectly
  const [showNotification, setShowNotification] = useState(false); // Whether to show a notification to the user

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          if (selectedWord.includes(letter)) { // Check if the selected word contains the letter
            if (!correctLetters.includes(letter)) { // Check if the letter hasn't already been guessed correctly
              setCorrectLetters(currentLetters => [...currentLetters, letter]); // Add the letter to the list of correct letters
            } else {
              show(setShowNotification); // If same letter is entered twice, notification appears
            }
          } else {
            if (!wrongLetters.includes(letter)) { // Check if the letter hasn't already been guessed incorrectly
              setwrongLetters(wrongLetters => [ ...wrongLetters, letter]); // Add the letter to the list of wrong letters
            } else {
              show(setShowNotification); // If same letter is entered twice, notification appears
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown); // Add event listener for keydown events

    return () => window.removeEventListener('keydown', handleKeydown); //one event listener runing at one time

  }, [correctLetters, wrongLetters, playable]);

  // Function to clear correct and wrong letters, and gives a new word
  function playAgain() {
    setPlayable(true);

    // Empty arrays
    setCorrectLetters([]); // Reset the list of correct letters
    setwrongLetters([]); // Reset the list of wrong letters

    const random = Math.floor(Math.random() * words.length); // Choose a new word at random from the array
    selectedWord = words[random];
  }
// Render the game components, including the Header, Figure, WrongLetters, Word, Popup, and Notification components
  return (
    <>
     <Header />
     <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
     </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
