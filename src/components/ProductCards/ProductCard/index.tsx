import type { FC } from 'react';
import Button from 'components/shared/Button';

interface ProductCardTypes {
  className: string;
  title: string;
  highlighted: string;
  text: string;
  btn: string;
}

const ProductCard: FC<ProductCardTypes> = ({
  title, highlighted, text, btn, className,
}) => (
  <div className={`card-list ${className}`}>
    <h3 className="card-title">
      {title}
    </h3>
    <div className="card-text-wrapper">
      <p className="card-text">
        {highlighted && <span className="highlighted-text">{highlighted}</span>}
        {text}
      </p>
      <Button className="card-btn" text={btn} />
    </div>
  </div>
);

export default ProductCard;
