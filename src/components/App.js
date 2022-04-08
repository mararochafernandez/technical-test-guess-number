import '../styles/App.scss';
import { useEffect, useState } from 'react';
import ls from '../services/localstorage';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [number, setNumber] = useState(ls.get('number', ''));

  // local storage

  useEffect(() => {
    ls.set('number', number);
  }, [number]);

  // event handlers

  const handleInput = (value) => {
    setNumber(value);
  };

  const handleButton = () => {
    if (!isNaN(number) && number >= 1 && number <= 10000000000) {
      console.log('guess number');
      guessNumber(number);
    } else {
      console.error('invalid number');
    }
  };

  // helpers

  const guessNumber = (number) => {
    /*
    for (let i = 1; i <= 10000000000; i++) {
      if (i === number) {
        console.log(`the entered value is ${number}`);
        break;
      }
    }
    */

    console.log('the entered value is ' + number);
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
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

