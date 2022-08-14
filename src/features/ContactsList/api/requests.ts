import { deleteData, updateData, addData } from "../../../shared/api";

export async function deleteContact(id: number) {
  let res: TContactData[] = await deleteData(`/contacts/${id}`);
  return res;
}

export async function updateContact(contact: TContactData) {
  let res: TContactData[] = await updateData(`/contacts/${contact.id}`, contact);
  return res;
}

export async function addContact(contact: TContactData) {
  let res: TContactData[] = await addData('/contacts', contact);
  return res;
}