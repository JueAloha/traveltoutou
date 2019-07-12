import { handleResponse } from '../tools/responseHandler'

export const registration = (firstName, lastName, username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    }),
  }
  return fetch(
    `http://localhost:8080/kiwi/api/users/register`,
    requestOptions
  ).then(handleResponse)
}

export const connection = (mail, password) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mail, password }),
  }

  return fetch(`kiwi/api/users/login`, requestOptions).then(handleResponse)
}
