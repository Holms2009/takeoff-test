import { fetchData } from "..";

export async function fetchContacts() {
  let data: TContactData[] = await fetchData('/contacts');
  return data;
}