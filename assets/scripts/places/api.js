const config = require('../config')
const store = require('../store')

const getPlaces = () => {
  return $.ajax({
    url: `${config.apiUrl}/places/`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createPlace = (data) => {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/places`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}


module.exports = {
   getPlaces,
   createPlace
}