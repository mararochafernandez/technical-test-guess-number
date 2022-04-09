import '../styles/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <h1 className="header__title">{props.title}</h1>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Título',
};

export default Header;
