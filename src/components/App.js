import '../styles/App.scss';
import { useEffect, useState } from 'react';
import localStorage from '../services/local-storage';
import binarySearch from '../services/binary-search';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [inputNumber, setInputNumber] = useState(
    localStorage.get('number', '')
  );
  const [solution, setSolution] = useState('');
  const [error, setError] = useState('');

  const minNumber = 1;
  const maxNumber = 10000000000;

  // local storage

  useEffect(() => {
    localStorage.set('number', inputNumber);
  }, [inputNumber]);

  // event handlers

  const handleInput = (value) => {
    setInputNumber(value);
    setSolution('');
    setError('');
  };

  const handleButton = () => {
    if (
      !isNaN(inputNumber) &&
      inputNumber >= minNumber &&
      inputNumber <= maxNumber
    ) {
      guessNumber();
    } else {
      setError('Invalid number');
    }
  };

  // helpers

  const guessNumber = () => {
    let result = binarySearch(minNumber, maxNumber, inputNumber);

    if (result === -1) {
      setError('Number not found');
    } else {
      setSolution(result);
    }
  };

  const renderSolution = () => {
    return solution !== '' ? (
      <div className="alert alert-success mt-4">
        The entered number is: {solution}
      </div>
    ) : null;
  };

  const renderError = () => {
    return error !== '' ? (
      <div className="alert alert-danger mt-4">{error}</div>
    ) : null;
  };

  return (
    <div className="container">
      <div className="min-view-height">
        <Header title="Guess Number" />

        <main className="m-5 col-lg-6">
          <Form
            minNumber={minNumber}
            maxNumber={maxNumber}
            inputNumber={inputNumber}
            handleInput={handleInput}
            handleButton={handleButton}
          />

          {renderSolution()}
          {renderError()}
        </main>
      </div>

      <Footer copy="2022 Mara Rocha" />
    </div>
  );
}

export default App;

