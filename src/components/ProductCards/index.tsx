import type { FC } from 'react';
import ProductCard from 'components/ProductCards/ProductCard/index';

const config = [
  {
    id: '1',
    btn: 'Получить деньги',
    highlighted: 'До 4 000 000 ₸,',
    text: ' без залога, на срок до 36 месяцев – малому бизнесу',
    title: 'Микрокредит для ИП',
  },
  {
    id: '2',
    btn: 'Получить деньги',
    highlighted: 'До 4 000 000 ₸',
    text: ' на срок до 36 месяцев – частным лицам',
    title: 'Микрокредит на любые цели',
  },
  {
    id: '3',
    btn: 'Получить деньги',
    highlighted: 'До 4 000 000 ₸,',
    text: ' без залога, на срок до 36 месяцев – малому бизнесу',
    title: 'Микрокредит для самозанятых',
  },
  {
    id: '4',
    btn: 'Получить карту',
    text: 'До 300 000 ₸ на цифровую карту – частным лицам',
    title: 'Карта Лайт с кэшбэком',
  },
];

const ProductCards: FC = () => (
  <div className="container">
    <section className="product-cards">
      <h2 className="product-title">Рекомендуемые продукты</h2>
      <div className="cards-list">
        {config.map((product, index) => (
          <ProductCard
            key={product.id}
            btn={product.btn}
            className={`product-${index + 1}`}
            highlighted={product.highlighted}
            text={product.text}
            title={product.title}
          />
        ))}
      </div>
    </section>
  </div>
);

export default ProductCards;
