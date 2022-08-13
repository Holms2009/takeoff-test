import block from "bem-cn";

import './Button.scss';

let b = block('Button');

type Props = {
  text: string;
  type?: 'button' | 'submit';
}

function Button({ text, type = "button" }: Props) {
  return (
    <button className={b()} type={type}>
      {text}
    </button>
  )
}

export { Button };