import { type FC, useState } from 'react';
import { burgerMenu, burgerNav, burgerSocial } from 'components/layout/Header/Burger/config';
import AppStoreIcon from 'assets/icons/appstore-dark.svg?react';
import IconBurger from 'assets/icons/burger-menu-icon.svg?react';
import GoogleIcon from 'assets/icons/google-dark.svg?react';
import IconWhatsApp from 'assets/icons/icon-whats.svg?react';
import IconClose from 'assets/icons/menu-burger-close.svg?react';

const Burger: FC = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const handleBurgerClose = () => setBurgerOpen(false);
  const handleBurgerOpen = () => setBurgerOpen(true);

  return (
    <div>
      <div className="burger-menu-opener" onClick={isBurgerOpen ? handleBurgerClose : handleBurgerOpen}>
        {isBurgerOpen ? <IconClose className="close-svg" /> : <IconBurger />}
      </div>

      <div className={`burger-overlay ${isBurgerOpen ? 'open' : ''}`} onClick={handleBurgerClose}>
        <div className="burger-menu container" onClick={(e) => e.stopPropagation()}>
          <div className="menu">
            <ul>
              {burgerMenu.map((item) => (
                <li key={item.id} className="burger-item">
                  <a className="burger-item-link" href={item.link}>
                    {item.title}
                    <span className={item.iconClass}>
                      {item.icon && <item.icon />}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav className="burger-nav">
            <ul className="nav-item">
              {burgerNav.map((item) => (
                <li key={item.id} className="nav-list">
                  <a className="nav-item-link" href={item.link}>
                    <span className={item.iconClass}>
                      <item.icon />
                    </span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="burger-footer">
            <div className="burger-footer-wrap">
              <a className="burger-phone" href="tel:+77010063535">+7 707 353 24 25</a>
              <button className="burger-lang-btn">KZ</button>
            </div>
            <span className="burger-time">с 9:00 до 20:00</span>
            <span className="hr"> </span>
            <a className="burger-whatsapp" href="https://wa.me/77010063535">
              <IconWhatsApp />
              Написать в WhatsApp
            </a>
            <div className="burger-icons">
              <div className="icons">
                <GoogleIcon />
                <AppStoreIcon />
              </div>
              <div className="burger-social-icons">
                {burgerSocial.map((social) => (
                  <div key={social.id} className="burger-social">
                    <social.icon className="burger-social-svg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
