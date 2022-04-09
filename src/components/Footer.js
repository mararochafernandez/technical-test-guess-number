import propTypes from 'prop-types';
import '../styles/Footer.scss';
import FooterLink from './FooterLink';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <p className="footer__copy">&copy; {props.copy}</p>
          <ul className="footer__menu">
            <FooterLink
              name="Instagram"
              url="https://www.instagram.com/maranhaknits"
              icon="fab fa-instagram"
            />

            <FooterLink
              name="LinkedIn"
              url="https://www.linkedin.com/in/mararochafernandez"
              icon="fab fa-linkedin-in"
            />

            <FooterLink
              name="GitHub"
              url="https://github.com/mararochafernandez"
              icon="fab fa-github-alt"
            />

            <FooterLink
              name="Twitter"
              url="https://twitter.com/maranhaknits"
              icon="fab fa-twitter"
            />
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  copy: 'Copyright',
};

Footer.propTypes = {
  copy: propTypes.string,
};

export default Footer;
