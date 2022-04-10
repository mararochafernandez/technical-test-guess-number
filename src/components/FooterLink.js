import propTypes from 'prop-types';

const FooterLink = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.url} title={props.name}>
        <i className={props.icon}></i>
      </a>
    </li>
  );
};

FooterLink.propTypes = {
  url: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default FooterLink;
