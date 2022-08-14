import block from "bem-cn";
import React, { useState } from "react";

import './ContactsList.scss';

import { deleteContact, updateContact, addContact } from "./api/requests";
import { newContactID, searchByName } from "./lib/utils";
import { ContactEditor } from "../ContactEditor/ContactEditor";
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

  let sortedData = searchByName(data, search);
  let dispatch = useAppDispatch();

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
          <div className={b('contact')} key={contact.id}>
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
              <span className={b('btn', { remove: true })} onClick={() => removeContact(contact)}></span>
              <span className={b('btn', { edit: true })} onClick={() => setEdit(contact)}></span>
            </div>
          </div>
        ))}
        <div className={b('contact', { new: true })}>
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