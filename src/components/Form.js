import '../styles/Form.scss';

const Form = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleInput(event.currentTarget.value);
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <label className="form__label" htmlFor="number">
        Enter a number between 1 and 10.000.000.000, inclusive:
      </label>

      <input
        className="form__input"
        type="number"
        name="number"
        id="number"
        min="1"
        max="10000000000"
        value={props.number}
        onChange={handleChange}
      />

      <button
        className="form__button"
        title="Guess number"
        onClick={props.handleButton}
      >
        Guess number
      </button>
    </form>
  );
};

export default Form;
