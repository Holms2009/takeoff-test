import { host } from '../config/api';

async function fetchData(url: string) {
  let response = await fetch(host + url)
    .then(checkResponse)
    .catch((err: any) => {
      console.error(err.message);
    })

  return response;
}

async function checkResponse(response: Response) {
  if (!response.ok) throw new Error('Failed to fetch data from: ' + response.url);
  return await response.json();
}

export { fetchData };