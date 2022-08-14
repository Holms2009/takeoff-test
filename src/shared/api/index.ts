import { host } from '../config/api';

async function fetchData(url: string) {
  let response = await fetch(host + url)
    .then(checkResponse)
    .catch((err: any) => {
      console.error(err.message);
    })

  return response;
}

async function deleteData(url: string) {
  let response = await fetch(host + url, {
    method: 'DELETE'
  })
    .then(checkResponse)
    .catch((err: any) => {
      console.error(err.message);
    })

  return response;
}

async function updateData(url: string, data: TDataToSend) {
  let response = await fetch(host + url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
    .then(checkResponse)
    .catch((err: any) => {
      console.error(err.message);
    })

  return response;
}

async function addData(url: string, data: TDataToSend) {
  let response = await fetch(host + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
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

export { fetchData, deleteData, updateData, addData };