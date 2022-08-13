import block from "bem-cn";
import React from "react";

import './Button.scss';

let b = block('Button');

type Props = {
  text: string;
  type?: 'button' | 'submit';
  onClick?: TClickHandler;
}

function Button({ text, type = "button", onClick }: Props) {
  function handleClick(evt: React.MouseEvent) {
    onClick && onClick(evt);
  }
  return (
    <button className={b()} type={type} onClick={handleClick}>
      {text}
    </button>
  )
}

export { Button };