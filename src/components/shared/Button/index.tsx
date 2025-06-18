import React from 'react';

interface ButtonProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text, className, style,
}) => (
  <button className={`btn ${className}`} style={style}>
    {text}
  </button>
);

export default Button;
