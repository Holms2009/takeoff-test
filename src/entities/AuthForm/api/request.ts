import { fetchData } from "../../../shared/api";

export async function fetchAuthData() {
  let data: TAuthData[] = await fetchData('/auth');
  return data;
}