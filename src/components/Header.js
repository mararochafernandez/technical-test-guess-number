import propTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="bg-light mt-5 p-5 rounded">
      <h1 className="display-2">{props.title}</h1>

      <p className="lead col-lg-6">
        In this program I apply the recursive binary search algorithm, also
        known as half-interval search, to find an integer in an interval between
        1 and 10<sup>10</sup>, based on divide and conquer approach.
      </p>
    </header>
  );
};

Header.defaultProps = {
  title: 'Título',
};

Header.propTypes = {
  title: propTypes.string,
};

export default Header;
