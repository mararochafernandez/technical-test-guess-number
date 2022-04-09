import '../styles/Form.scss';

const Form = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleInput(event.currentTarget.value);
  };

  const handleClick = () => {
    props.handleButton();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <label className="form__label" htmlFor="number">
        Enter a number between {props.minNumber} and {props.maxNumber},
        inclusive:
      </label>

      <input
        className="form__input"
        type="number"
        name="number"
        id="number"
        min={props.minNumber}
        max={props.maxNumber}
        value={props.number}
        onChange={handleChange}
      />

      <button
        className="form__button"
        title="Guess number"
        onClick={handleClick}
      >
        Guess number
      </button>
    </form>
  );
};

export default Form;
