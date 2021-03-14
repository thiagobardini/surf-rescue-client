'use strict'
const authEvents = require('./auth/events')
const placeEvents = require('./places/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#signOutHide').hide()
  $('#hideContent').hide()


  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('#createAccount').on('submit', accountEvents.onCreateAccount)
  // $('#showAccounts').on('click', accountEvents.onGetAccounts)

  $('#createPlace').on('submit', placeEvents.onCreatePlace)
  $('#showPlaces').on('click', placeEvents.onGetAllPlaces)
  // $('.accountDestroy-display').on('click', accountEvents.onGetAccounts)
  
  // $('#account-destroy').on('click', '.account-destroy-dynamic', accountEvents.onDestroyAccount)
  // $('#account-display').on('submit', '.account-update-dynamic', accountEvents.onUpdateAccount)
   
   
    // $('.create-review').on('submit', reviewEvents.onCreateReview)
  // $('#accountId').on('click', accountEvents.onGetAccountById)
  
})
