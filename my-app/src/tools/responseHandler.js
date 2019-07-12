export const handleResponse = response => {
  if (!response.ok) {
    if (response.status === 401) {
      const error =
        'Oups! Nous avons rencontrez un problème, merci de réessayer'
      return Promise.reject(error)
    } else if (response.status === 403) {
      const error = 'Votre mot de passe est incorrect'
      return Promise.reject(error)
    } else if (response.status === 404) {
      const error = 'Votre mail est incorrect'
      return Promise.reject(error)
    } else {
      const error =
        'Oups! Nous avons rencontrez un problème, merci de réessayer'
      return Promise.reject(error)
    }
  } else {
    console.log(response)
    return Promise.resolve(response)
  }
}
