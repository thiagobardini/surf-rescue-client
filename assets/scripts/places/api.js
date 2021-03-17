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
    url: `${config.apiUrl}/places`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const getOnePlace = (id) => {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/places/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const destroyPlace = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/places/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePlace = function (id, data) {
  return $.ajax({
    url: `${config.apiUrl}/places/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}


module.exports = {
   getAllPlaces,
   createPlace,
   getOnePlace,
   destroyPlace,
   updatePlace
}