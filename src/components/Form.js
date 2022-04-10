import propTypes from 'prop-types';

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
    <form className="p-0" onSubmit={handleForm}>
      <label className="mb-2" htmlFor="number">
        Enter an integer between {props.minNumber} and {props.maxNumber},
        inclusive:
      </label>

      <div className="input-group m-0">
        <input
          className="form-control"
          type="number"
          name="number"
          id="number"
          min={props.minNumber}
          max={props.maxNumber}
          value={props.inputNumber}
          onChange={handleChange}
        />

        <button
          className="btn btn-outline-dark"
          type="button"
          title="Guess number"
          onClick={handleClick}
        >
          Guess number
        </button>
      </div>
    </form>
  );
};

Form.defaultProps = {
  minNumber: 1,
  maxNumber: 10000000000,
  inputNumber: '',
};

Form.propTypes = {
  minNumber: propTypes.number,
  maxNumber: propTypes.number,
  inputNumber: propTypes.string,
  handleInput: propTypes.func.isRequired,
  handleButton: propTypes.func.isRequired,
};

export default Form;
