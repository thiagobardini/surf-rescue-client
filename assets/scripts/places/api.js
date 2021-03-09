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



module.exports = {
   getPlaces
}