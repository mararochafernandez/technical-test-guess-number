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
      //setSolution(guessNumber(number));
      setSolution(binarySearch(number));
    } else {
      console.error('invalid number');
    }
  };

  // helpers

  /*
  // first solution
  const guessNumber = (number) => {
    const size = number.length;
    let result = '';

    if (size === 11) {
      result = maxNumber.toString();
    } else {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j <= 9; j++) {
          if (j.toString() === number[i]) {
            result += j.toString();
          }
        }
      }
    }

    return result;
  };
  */

  // second solution
  const binarySearch = (number) => {
    let left = minNumber;
    let right = maxNumber;
    let middle = 0;

    while (right >= left) {
      middle = left + Math.floor((right - left) / 2);

      if (middle.toString() === number) {
        return middle;
      }

      if (middle > number) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
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
              number={number}
              handleInput={handleInput}
              handleButton={handleButton}
              minNumber={minNumber}
              maxNumber={maxNumber}
            />

            {renderSolution()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

