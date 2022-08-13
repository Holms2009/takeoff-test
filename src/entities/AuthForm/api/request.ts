import { fetchData } from "../../../shared/api";

export async function fetchAuthData() {
  let data = await fetchData('/auth');
  return data;
}