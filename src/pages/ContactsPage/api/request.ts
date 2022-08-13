import { fetchData } from "../../../shared/api";

export async function fetchContacts() {
  let data = await fetchData('/contacts');
  return data;
}