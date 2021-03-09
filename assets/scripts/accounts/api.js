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

const getAccountById = () => {
  console.log(`Teste ${store.user._id}`)
  return $.ajax({
    url: `${config.apiUrl}/accounts/${store.user._id}`,
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

const updateGame = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game._id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}




// const viewGames = () => {
//   console.log('got games') // XXX delete
//   return $.ajax({
//     url: `${config.apiUrl}/games/`,
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     }
//   })
// }

module.exports = {
   createAccount,
   getAccounts,
   getAccountById

}