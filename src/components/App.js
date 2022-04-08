import '../styles/App.scss';
import { useEffect, useState } from 'react';
import ls from '../services/localstorage';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [number, setNumber] = useState(ls.get('number', 0));

  // local storage

  useEffect(() => {
    ls.set('number', number);
  }, [number]);

  // event handlers

  const handleInput = (value) => {
    setNumber(value);
  };

  const handleButton = () => {
    console.log('guess number');
  };

  console.log(number);

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
