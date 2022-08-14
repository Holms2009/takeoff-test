import block from "bem-cn";
import { useEffect } from "react";

import './ContactsPage.scss';

import { fetchContactsThunk } from "../../shared/api/Contacts/asyncActions";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { getContacts } from "../../shared/store/slices/ContactsPage";
import { ContactsList } from '../../features';


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
        <ContactsList data={contactsData} />
      </div>
    </div>
  )
}

export { ContactsPage };