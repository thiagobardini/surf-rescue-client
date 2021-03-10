const config = require('../config')
const store = require('../store')

const getAccounts = () => {
  return $.ajax({
    url: `${config.apiUrl}/accounts/`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createAccount = function (data) {
   return $.ajax({
      method: 'POST',
      url: `${config.apiUrl}/accounts`,
      headers: {
         Authorization: 'Bearer ' + store.user.token
      },
      data: data
   })
}

const updateAccount = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/accounts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}



const destroyAccount = function (id) {
  return $.ajax({
    url: config.apiUrl + '/accounts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
   createAccount,
   getAccounts,
   updateAccount

}