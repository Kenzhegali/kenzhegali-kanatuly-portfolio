import type { FC } from 'react';
import { awardsData } from 'components/Award/config';
import IconArrow from 'assets/icons/slider-arrow-icon.svg?react';
import IconArrowMob from 'assets/icons/vector.svg?react';

const Award: FC = () => (
  <div className="container">
    <section className="awards">
      <h2 className="awards-title">
        Наши награды
      </h2>
      <a className="award-arrow" href="/">
        <IconArrow className="award-arrow-icon" />
        <IconArrowMob className="award-arrow-mob-icon" />
      </a>
      <div className="awards-block">
        {awardsData.map((award) => (
          <div key={award.id} className="award-items">
            <img alt={award.alt} className="award-img" src={award.imgSrc} />
            <p className="award-text">{award.text}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Award;
