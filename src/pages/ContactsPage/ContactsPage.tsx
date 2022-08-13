import block from "bem-cn";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { getContacts } from "../../shared/store/slices/ContactsPage";
import { fetchContactsThunk } from "./api/asyncActions";

import './ContactsPage.scss';

let b = block('ContactsPage');

function ContactsPage() {
  let dispatch = useAppDispatch();
  let contactsData: TContactData[] = useAppSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={b()}>
      <div className={b('wrapper')}>
        <h2 className={b('title')}>Contacts</h2>
        <div className={b('list')}>
          <div className={b('list-wrapper')}>
            {contactsData.map((contact) => (
              <div className={b('contact')} key={contact.id}>
                <img className={b('avatar')} src={contact.avatar} alt="Contact avatar" />
                <span className={b('name')}>{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContactsPage };