import "./Footer.css";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <p className="footer__author">Developed by Ryan Bommarito</p>
      <p className="footer__date">{getCurrentYear()}</p>
    </footer>
  );
}

export default Footer;
