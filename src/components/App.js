import '../styles/App.scss';
import { useEffect, useState } from 'react';
import ls from '../services/localstorage';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [number, setNumber] = useState(ls.get('number', ''));
  const [solution, setSolution] = useState('');

  const minNumber = 1;
  const maxNumber = 10000000000;

  // local storage

  useEffect(() => {
    ls.set('number', number);
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
    let result = binarySearch(minNumber, maxNumber);

    if (result === -1) {
      console.error('Entered number is not found');
    } else {
      setSolution(result);
      console.log('Entered number is found');
    }
  };

  const binarySearch = (left, right) => {
    if (right >= left) {
      let middle = left + Math.floor((right - left) / 2);

      if (middle.toString() === number) {
        return middle;
      }

      if (middle > number) {
        return binarySearch(left, middle - 1);
      }

      return binarySearch(middle + 1, right);
    }

    return -1;
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

