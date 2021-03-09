'use strict'
const authEvents = require('./auth/events')
const accountEvents = require('./accounts/events')
const placesEvents = require('./places/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#signOutHide').hide()


  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#createAccount').on('submit', accountEvents.onCreateAccount)
  $('#showAccounts').on('click', accountEvents.onGetAccounts)
  $('#accountId').on('click', accountEvents.onGetAccountById)

  $('#showPlaces').on('click', placesEvents.onGetPlaces)
})
