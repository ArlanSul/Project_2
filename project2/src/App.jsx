import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardSet.length);
    } while (newIndex === currentIndex && cardSet.length > 1);

    setCurrentIndex(newIndex);
    setIsFlipped(false); 
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
  <div className="App">
    <div className="header">
        <h1>Ultimate Trivia!</h1>
        <p>Test your general knowledge with these flashcards.</p>
        <h5>Total Cards: </h5>
      </div>

      <button className="next-btn">
        Next Card ➔
      </button>
  </div>  );
}

export default App
