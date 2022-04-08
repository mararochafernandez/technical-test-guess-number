import '../styles/FooterLink.scss';

const FooterLink = (props) => {
  return (
    <li className="footer__item">
      <a className="footer__link" href={props.url} title={props.name}>
        <i className={props.icon}></i>
      </a>
    </li>
  );
};

export default FooterLink;