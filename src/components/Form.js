import '../styles/Form.scss';

const Form = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleInput(event.currentTarget.value);
  };

  const handleButton = () => {
    props.handleButton();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <label className="form__label" htmlFor="number">
        Number:
      </label>
      <input
        className="form__input"
        type="number"
        name="number"
        id="number"
        value={props.number}
        onChange={handleChange}
      />

      <button
        className="form__button"
        title="Guess number"
        onClick={handleButton}
      >
        Guess number
      </button>
    </form>
  );
};

export default Form;
