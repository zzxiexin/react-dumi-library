import classnames from 'classnames';
import React from 'react';
import './index.scss';

type colorTypes = 'green' | 'blue' | 'red' | 'gray' | 'black';
type ButtonTypes = {
  text: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: colorTypes;
  width?: number | string;
};

const Button: React.FC<ButtonTypes> = (props: ButtonTypes) => {
  const { text, className, style, color } = props;
  const classes = classnames('btn', className, color);
  // eslint-disable-next-line react/button-has-type
  return (
    <button className={classes} style={{ ...style }}>
      {text}
    </button>
  );
};

export default Button;
