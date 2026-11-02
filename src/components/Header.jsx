
import logo from "../img/logoOne.png";
import user from "../img/user.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="24/7 Forecast" />
      </div>

      <nav className="header__nav">
        <a href="#about">Who we are</a>
        <a href="#contacts">Contacts</a>
        <a href="#menu">Menu</a>
      </nav>

      <div className="header__actions">
        <button className="header__signup" type="button">
          Sign Up
        </button>

        <img className="header__profile" src={user} alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
