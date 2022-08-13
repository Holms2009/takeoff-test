import block from "bem-cn";
import React from "react";

import './Input.scss';

let b = block('Input');

type Props = {
  label: string;
  value: string;
  inputHandler: TInputHandler;
  type?: 'text' | 'password';
  placeholder?: string;
}

function Input({ label, value, inputHandler, type = 'text', placeholder = '' }: Props) {
  function handleInput(evt: React.FormEvent<HTMLInputElement>) {
    let value = evt.currentTarget.value;

    inputHandler && inputHandler(value);
  }

  return (
    <label className={b()}>
      {label}
      <input
        className={b('field')}
        type={type}
        value={value}
        onInput={handleInput}
        placeholder={placeholder}
      />
    </label>

  )
}

export { Input };