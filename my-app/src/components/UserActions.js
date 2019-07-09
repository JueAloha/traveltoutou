 export const registration = (lastName, firstName, mail, password) => {
     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ lastName, firstName, mail, password })
     };

     return fetch(`kiwi/api/users/register`, requestOptions).then(handleResponse);
 };

 export const connexion = (mail, password) => {
     const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({mail, password })
     };

     return fetch(`kiwi/api/users/login`, requestOptions).then(handleResponse);
 };


 function handleResponse(response) {
     if(!response.ok) {
         if (response.status === 401) {
             const error = "Oups! Nous avons rencontrez un problème, merci de réessayer";
             return Promise.reject(error)
         } else if (response.status === 403) {
             const error = "Votre mot de passe est incorrect";
             return Promise.reject(error)
         } else if(response.status === 404) {
             const error = "Votre mail est incorrect";
             return Promise.reject(error)
         } else {
             const error = "Oups! Nous avons rencontrez un problème, merci de réessayer";
             return Promise.reject(error)
         }
     } else {
         return JSON.parse(response)
     }
 }