const config = require('../config')
const store = require('../store')

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

const getAllPlaces = () => {
  return $.ajax({
    url: `${config.apiUrl}/places/`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}


module.exports = {
   getAllPlaces,
   createPlace
}