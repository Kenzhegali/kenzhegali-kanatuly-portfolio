import type { FC } from 'react';
import IconAppStoreMobile from 'assets/icons/appstore-mobile.svg?react';
import IconGoogleMobile from 'assets/icons/google-mobile.svg?react';

const MobileBanner: FC = () => (
  <div className="container">
    <section className="mobile-banner">
      <div className="banner-content">
        <h2 className="banner-title">
          Мобильное
          приложение Lite
        </h2>
        <p className="banner-text">
          Простой способ подать заявку на кредит и погашать платежи – в вашем смартфоне
        </p>
        <div className="download-icons">
          <a className="light-svg svg" href="/">
            <IconGoogleMobile />
          </a>
          <a className="light-svg svg" href="/">
            <IconAppStoreMobile />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default MobileBanner;
