import type { FC } from 'react';
import {
  business,
  contacts,
  individuals,
  navigation,
} from 'components/layout/Footer/config';
import IconCarbon from 'assets/icons/carbon.svg?react';
import IconDarkAppstore from 'assets/icons/dark_app_store.svg?react';
import IconDarkGoogle from 'assets/icons/dark_google_play.svg?react';
import IconPci from 'assets/icons/pci.svg?react';

const Footer: FC = () => (
  <div className="container">
    <footer className="footer">
      <section className="contacts">
        <div className="contact-links">
          {contacts.map((social) => (
            <a key={social.id} className={social.className} href={social.link}>
              <social.icon />
            </a>
          ))}
        </div>
        <div className="contact-info">
          <a className="phone-link" href="tel:+77001234567">
            +7 (707) 353-24-25
          </a>
          <span className="time">c 9:00 до 20:00</span>
        </div>
      </section>
      <div className="footer-wrap">
        <div className="footer-interactions">
          <div className="footer-individuals cooperation">
            <h2 className="footer-title">Частным лицам</h2>
            <ul className="footer-interaction-list">
              {individuals.map((item) => (
                <li key={item.id} className="interaction-item">
                  <a className="item-link" href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-business cooperation">
            <h2 className="footer-title">Для бизнеса</h2>
            <ul className="footer-interaction-list">
              {business.map((item) => (
                <li key={item.id} className="interaction-item">
                  <a className="item-link" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-icons">
            <div className="icons-block download">
              <a className="footer-icons-link" href="/">
                <IconDarkGoogle />
              </a>
              <a className="footer-icons-link" href="/">
                <IconDarkAppstore />
              </a>
            </div>
            <div className="icons-block">
              <a className="footer-icons-link" href="/">
                <IconCarbon />
              </a>
              <a className="footer-icons-link" href="/">
                <IconPci />
              </a>
            </div>
          </div>
        </div>

        <nav className="footer-navigation">
          {navigation.map((item) => (
            <a key={item.text} className="navigation-link" href={item.link}>
              {item.text}
            </a>
          ))}
        </nav>

        <p className="footer-copyright">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          libero voluptatem, minus porro consectetur provident eius corrupti
          ratione atque aliquid neque temporibus maiores repellat vitae!
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
