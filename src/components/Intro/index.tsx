import type { FC } from 'react';
import Button from 'components/shared/Button/index';
import { paginationItems } from 'components/Intro/config';
import introCar from 'assets/images/car.png';
import introCarMobile from 'assets/images/mobile-car.png';

const Intro: FC = () => (
  <div className="container">
    <section className="intro">
      <div className="intro-description">
        <h2 className="intro-title">Авто по Лайту</h2>
        <p className="intro-text">Пользуйтесь Картой Лайт и выиграйте автомобиль и денежные призы!</p>
        <Button className="intro-btn" text="Получить карту" />
      </div>
      <img alt="Intro Car" className="car-img" src={introCar} />
      <img alt="Mobile intro car" className="mobile-car-img" src={introCarMobile} />
      <p className="note">Читать условия</p>
    </section>
    <section className="pagination">
      <ul className="pagination-row">
        {paginationItems.map((item) => (
          <li key={item.id} className={`pagination-list ${item.className || ''}`.trim()}>
            <a className="pagination-link" href={item.link}>
              <span className={item.iconClass}><item.icon /></span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Intro;
