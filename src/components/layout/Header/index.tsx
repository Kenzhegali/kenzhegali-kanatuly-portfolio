import { type FC } from 'react';
import Burger from 'components/layout/Header/Burger/index';
import Location from 'assets/icons/location-icon.svg?react';
import Logo from 'assets/icons/lite.svg?react';

const Header: FC = () => (
  <header className="header">
    <div className="burger-wrap container">
      <Burger />
      <Logo style={{ width: '60px', height: '60px' }} />
      <button className="login-btn-mobile">Войти</button>
    </div>
    <div className="container header-wrapper">
      <div className="header-nav">
        <Logo style={{ width: '60px', height: '60px' }} />
        <ul className="header-list">
          <li className="list">
            <a className="link" href="/">
              Частным лицам
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Бизнесу
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Инвесторам
            </a>
          </li>
        </ul>
      </div>
      <div className="header-menu">
        <a className="location-text" href="/">
          <Location />
          Карта отделений
        </a>
        <button className="lang-btn">KZ</button>
        <button className="login-btn">Войти</button>
      </div>
    </div>
  </header>
);

export default Header;
