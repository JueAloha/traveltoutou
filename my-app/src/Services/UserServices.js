import { handleResponse } from '../tools/responseHandler'

export const registration = (lastName, firstName, username, password) => {

     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ lastName, firstName, username, password })
     };

     return fetch(`http://192.168.1.86:8080/kiwi/api/users/register`, requestOptions).then(handleResponse)
 };

export const connection = (username, password) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }


     return fetch(`http://192.168.1.86:8080/kiwi/api/users/login?username=${username}&password=${password}`, requestOptions)
         .then(handleResponse)
         .then(result => {
             return result
     })
 };

