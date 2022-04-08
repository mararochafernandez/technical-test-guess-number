import '../styles/Footer.scss';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <p className="footer__copy">&copy; 2022 Mara Rocha</p>
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

export default Footer;
