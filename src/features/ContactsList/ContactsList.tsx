import block from "bem-cn";
import React, { useEffect, useState } from "react";

import './ContactsList.scss';

import { deleteContact, updateContact, addContact } from "./api/requests";
import { ContactCard, ContactEditor } from "./components";
import { newContactID, searchByName } from "./lib/utils";
import { fetchContactsThunk } from "../../shared/api/Contacts/asyncActions";
import { useAppDispatch } from "../../shared/store/hooks";

let b = block('ContactsList');

type Props = {
  data: TContactData[];
}

function ContactsList({ data }: Props) {
  let [edit, setEdit] = useState<null | TContactData>(null);
  let [add, setAdd] = useState(false);
  let [search, setSearch] = useState('');
  let [sortedData, setSortedData] = useState<TContactData[]>([]);

  let dispatch = useAppDispatch();

  useEffect(() => {    
    if (data.length) setSortedData(searchByName(data, search));
  }, [search, data])

  function removeContact(contact: TContactData) {
    deleteContact(contact.id)
      .then(() => {
        dispatch(fetchContactsThunk());
      })
  }

  function updateContactData(contact: TContactData) {
    updateContact(contact)
      .then(() => {
        dispatch(fetchContactsThunk());
      })
  }

  function newContact(contact: TContactData) {
    contact.id = newContactID(data);

    addContact(contact)
      .then(() => {
        dispatch(fetchContactsThunk());
      })
  }

  return (
    <div className={b()}>
      <div className={b('wrapper', { 'no-scroll': edit !== null })}>
        <input
          className={b('search')}
          value={search}
          onInput={(evt) => setSearch(evt.currentTarget.value)}
          placeholder="Search for contact name"
        />
        {sortedData.map((contact) => (
          <ContactCard
            contact={contact}
            removeHandler={removeContact}
            editHandler={setEdit}
            key={contact.id}
          />
        ))}
        <div className={b('new')}>
          <span className={b('add-button')} onClick={() => setAdd(true)}></span>
        </div>
      </div>
      {edit &&
        <div className={b('editor-wrapper')}>
          <ContactEditor contact={edit} cancelHandler={() => setEdit(null)} submitHandler={updateContactData} />
        </div>
      }
      {add &&
        <div className={b('editor-wrapper')}>
          <ContactEditor cancelHandler={() => setAdd(false)} submitHandler={newContact} />
        </div>
      }
    </div>
  )
}

export { ContactsList };