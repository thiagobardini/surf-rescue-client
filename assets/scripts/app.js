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

  $('#createPlace').on('submit', placeEvents.onCreatePlace)
  $('#showPlaces').on('click', placeEvents.onGetAllPlaces)
  $('#get-one-place').on('submit', placeEvents.onGetOnePlace)

  $('#placeList').on('submit','.place-update-dynamic', placeEvents.onUpdatePlace)
  $('#placeList').on('click', '.place-destroy-dynamic', placeEvents.onDynamicDestroyPlace)

})