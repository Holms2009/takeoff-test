import block from "bem-cn";
import React, { useState } from "react";
import { faker } from '@faker-js/faker';

import './ContactEditor.scss';

import { contactTemplate } from "./config/data";
import { Button, Input } from "../../../../shared/ui";

let b = block('ContactEditor');

type Props = {
  contact?: TContactData;
  cancelHandler: Function;
  submitHandler: Function;
}

function ContactEditor({ contact = contactTemplate, cancelHandler, submitHandler }: Props) {
  let [name, setName] = useState(contact.name);
  let [phone, setPhone] = useState(contact.phone);
  let [email, setEmail] = useState(contact.email);

  function handleSubmit(evt: React.FormEvent) {
    let result = { ...contact, name, phone, email };

    if (!result.avatar.length) {
      result.avatar = faker.image.avatar();
    }

    submitHandler && submitHandler(result);
    cancelHandler();
    evt.preventDefault();
  }

  return (
    <div className={b()}>
      <form className={b('form')} onSubmit={handleSubmit}>
        <h2 className={b('title')}>Edit contact</h2>
        <div className={b('fields')}>
          <Input label="Name" value={name} inputHandler={setName} />
          <Input label="Phone" value={phone} inputHandler={setPhone} />
          <Input label="Email" value={email} inputHandler={setEmail} />
        </div>
        <div className={b('buttons')}>
          <Button text="Submit" type="submit" />
          <Button text="Cancel" onClick={() => cancelHandler()} />
        </div>
      </form>
    </div>
  )
}

export { ContactEditor };