function newContactID(contacts: TContactData[]) {
  let maxID = 0;

  contacts.forEach((contact) => {
    if (contact.id > maxID) {
      maxID = contact.id;
    }
  })

  return maxID + 1;
}

export { newContactID };