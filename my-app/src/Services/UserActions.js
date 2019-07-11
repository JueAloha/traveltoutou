import { handleResponse } from '../tools/responseHandler'

export const registration = (lastName, firstName, username, password) => {
     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ lastName, firstName, username, password })
     };

     return fetch(`kiwi/api/users/register`, requestOptions).then(handleResponse);
 };

 export const connection = (mail, password) => {
     const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({mail, password })
     };

     return fetch(`kiwi/api/users/login`, requestOptions).then(handleResponse);
 };