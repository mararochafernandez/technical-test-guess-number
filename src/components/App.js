import '../styles/App.scss';
import { useEffect, useState } from 'react';
import localStorage from '../services/local-storage';
import binarySearch from '../services/binary-search';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [number, setNumber] = useState(localStorage.get('number', ''));
  const [solution, setSolution] = useState('');

  const minNumber = 1;
  const maxNumber = 10000000000;

  // local storage

  useEffect(() => {
    localStorage.set('number', number);
  }, [number]);

  // event handlers

  const handleInput = (value) => {
    setNumber(value);
    setSolution('');
  };

  const handleButton = () => {
    if (!isNaN(number) && number >= minNumber && number <= maxNumber) {
      guessNumber();
    } else {
      console.error('Invalid number');
    }
  };

  // helpers

  const guessNumber = () => {
    let result = binarySearch(minNumber, maxNumber, number);

    if (result === -1) {
      console.error('Entered number is not found');
    } else {
      setSolution(result);
      console.log('Entered number is found');
    }
  };

  const renderSolution = () => {
    return solution !== '' ? <p>The entered number is: {solution}</p> : null;
  };

  return (
    <div className="page">
      <Header title="Guess Number" />

      <main className="main">
        <div className="main__container">
          <div className="main__wrapper">
            <Form
              minNumber={minNumber}
              maxNumber={maxNumber}
              number={number}
              handleInput={handleInput}
              handleButton={handleButton}
            />

            {renderSolution()}
          </div>
        </div>
      </main>

      <Footer copy="2022 Mara Rocha" />
    </div>
  );
}

export default App;

