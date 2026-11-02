
import logo from "../img/logoOne.png";
import instagram from "../img/instagramm.png";
import facebook from "../img/facbook.png";
import whatsapp from "../img/whatsapp.png";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <a className="footer-logo" href="#top">
        <img src={logo} alt="24/7 Forecast" />
      </a>

      <div className="footer-address">
        <p>Address</p>
        <span>Svobody str. 35</span>
        <span>Kyiv</span>
        <span>Ukraine</span>
      </div>

      <div className="footer-social">
        <p>Contact us</p>

        <div className="footer-icons">
          <a
            href="https://www.instagram.com/yehor_khmeliuk/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img src={facebook} alt="Facebook" />
          </a>

          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
