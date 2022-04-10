import propTypes from 'prop-types';
import FooterLink from './FooterLink';

const Footer = (props) => {
  return (
    <footer className="container my-5 p-0">
      <nav className="navbar navbar-expand navbar-light bg-light rounded">
        <div className="container-fluid px-5 py-2">
          <span className="navbar-text">&copy; {props.copy}</span>

          <ul className="navbar-nav">
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
      </nav>
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
