import block from "bem-cn"

import './ContactCard.scss';

let b = block('ContactCard');

type Props = {
  contact: TContactData;
  removeHandler: (arg0: TContactData) => void;
  editHandler: (arg0: TContactData) => void;
}

function ContactCard({ contact, removeHandler, editHandler }: Props) {
  return (
    <div className={b()}>
      <img className={b('avatar')} src={contact.avatar} alt="Contact avatar" />
      <div className={b('contact-data')}>
        <div className={b('field')}>
          <span className={b('label')}>Name:</span>
          &nbsp;
          <span className={b('data')}>{contact.name}</span>
        </div>
        <div className={b('field')}>
          <span className={b('label')}>Phone:</span>
          &nbsp;
          <span className={b('data')}>{contact.phone}</span>
        </div>
        <div className={b('field')}>
          <span className={b('label')}>Email:</span>
          &nbsp;
          <span className={b('data')}>{contact.email}</span>
        </div>
      </div>
      <div className={b('buttons')}>
        <span className={b('btn', { remove: true })} onClick={() => removeHandler(contact)}></span>
        <span className={b('btn', { edit: true })} onClick={() => editHandler(contact)}></span>
      </div>
    </div>
  )
}

export { ContactCard };