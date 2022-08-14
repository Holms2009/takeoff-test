function newContactID(contacts: TContactData[]) {
  let maxID = 0;

  contacts.forEach((contact) => {
    if (contact.id > maxID) {
      maxID = contact.id;
    }
  })

  return maxID + 1;
}

function searchByName(contacts: TContactData[], input: string) {
  let searchTemplate = new RegExp(input.toLowerCase() + '.+$', 'i');

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().search(searchTemplate) !== -1;
  })
}

export { newContactID, searchByName };