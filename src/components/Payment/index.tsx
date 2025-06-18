import type { FC } from 'react';
import Button from 'components/shared/Button/index';
import imgPayment from 'assets/images/payment-method.png';
import imgPaymentMobile from 'assets/images/payment-mobile.png';

const Payment: FC = () => (
  <div className="container">
    <section className="payment">
      <div className="payment-info">
        <h2 className="payment-title">
          <span className="title-linebreak">Платеж можно</span>
          внести прямо на сайте!
        </h2>
        <Button className="payment-btn" text="Оплатить" />
      </div>
      <div className="payment-demonstration">
        <img alt="payment demo" className="payment-img" src={imgPayment} />
        <img alt="payment demo" className="payment-img-mobile" src={imgPaymentMobile} />
      </div>
    </section>
  </div>
);

export default Payment;
