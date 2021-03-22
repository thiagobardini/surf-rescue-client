const placeEvents = require('./events')
const store = require('../store')

const createPlaceSuccess = (response) => {
  store.place = response.place
  $('#showPlaces').text('Click to Refresh the Places')
  $('form').trigger('reset')
  $('#exampleModalCenter').modal('hide')
  $('#success-message')
    .text('Your place has been successfully created!')
    .addClass('.success')
  setTimeout(function () {
    $('#success-message').text('').addClass('success')
  }, 4000)
}

const createPlaceFailure = (response) => {
  $('form').trigger('reset')
  $('#error-message')
    .text('Display places failed. Please try again!')
    .addClass('.failure')
  setTimeout(function () {
    $('#error-message').text('').addClass('failure')
  }, 4000)
}

const showAllPlacesSuccess = (response) => {
  $('#showPlaces').text('Show Places')
  $('#placeList').html('')
  let storeHTML = ''
  response.places.forEach((place) => {
    storeHTML += `
   <div class=" mx-auto col-6 w-70 p-3 text-center alert alert-primary" role="alert">
    <a>Place ID: ${place._id}</a>
    <p>Local Name: ${place.localName}</p>
    <p>Country: ${place.country}</p>
    <p>Description: ${place.description}</p>
    <p>Surf Level: ${place.surfLevel}</p>
    <p>Average Cost Day: US$${place.avgCostDay}</p>
    <p>Wave Range: ${place.waveRange}ft</p>
    <br>
    <form class="place-update-dynamic input-group mb-3" data-id=${place._id}>
      <input class="input-group mb-3" type="text" name="place[localName]" placeholder="New Local Name:" required>
      <input class="input-group mb-3" type="text" name="place[country]" placeholder="New Country:" required>
      <input class="input-group mb-3" type="text" name="place[description]" placeholder="New Description:" required>
      <input class="input-group mb-3" type="text" name="place[surfLevel]" placeholder="Surf Level:" required>
      <input class="input-group mb-3" type="text" name="place[avgCostDay]" placeholder="New Average Cost Day:" required>
      <input class="input-group mb-3" type="text" name="place[waveRange]" placeholder="New Wave Range:" required>
      <button type="submit" class="index-dynamic-button btn-block btn-primary">Update Place</button>
    </form>
  <hr>
  <button class='place-destroy-dynamic index-dynamic-button btn-block btn-primary' data-id=${place._id}>Delete Place</button>
</div>
    `
  })

  $('#placeList').html(storeHTML)
  $('#success-message')
    .text('Your places have been successfully displayed!')
    .addClass('.success')
  setTimeout(function () {
    $('#success-message').text('').addClass('success')
  }, 4000)

  $(document).ready(function () {
    $('#hidePlaces').click(function () {
      $('#placeList').hide()
      hidePlacesSuccess()
    })
    $('#showPlaces').click(function () {
      $('#placeList').show()
    })
  })
}

const hidePlacesSuccess = () => {
  $('#success-message')
    .text('Your places have been successfully hide!')
    .addClass('.success')
  setTimeout(function () {
    $('#success-message').text('').addClass('success')
  }, 4000)
}

const showAllPlacesFailure = function () {
  $('#error-message')
    .text("Sorry! Something wasn't right, please try again.")
    .addClass('.failure')
  setTimeout(function () {
    $('#error-message').text('').addClass('failure')
  }, 4000)
}

// Get one ID
const showPlaceSuccess = function (response) {
  $('form').trigger('reset')
  $('.placeId').html(`
  <div class="container alert alert-primary" role="alert" >
    <p>Place ID: ${response.place._id}</p>
    <p>Local Name: ${response.place.localName}</p>
    <p>Country: ${response.place.country}</p>
    <p>Description: ${response.place.description}</p>
    <p>Surf Level: ${response.place.surfLevel}</p>
    <p>Average Cost Day: US$${response.place.avgCostDay}</p>
    <p>Wave Range: ${response.place.waveRange}ft</p>
  </div>

  <div id="displayFeedbackId" class="col-12 d-none d-print-block d-flex justify-content-center bg-warning">
    <p>Your places have been successfully show!</p>
  </div>

  `)
  setTimeout(function () {
    $('#displayFeedbackId').text('').addClass('success')
  }, 4000)
}

const showPlaceFailure = (response) => {
  $('#error-message')
    .text("Sorry! Something wasn't right, please try again.")
    .addClass('.failure')
  setTimeout(function () {
    $('#error-message').text('').addClass('failure')
  }, 4000)
}

const onDestroyPlaceSuccess = function () {
  $('#placeList').html('')
  $('#success-message')
    .text('Place has been destroyed successfully')
    .addClass('.success')
  setTimeout(function () {
    $('#success-message').text('').addClass('success')
  }, 4000)
}

const onDestroyFailure = (response) => {
  $('#error-message')
    .text("Sorry! Something wasn't right, please try again.")
    .addClass('.failure')
  setTimeout(function () {
    $('#error-message').text('').addClass('failure')
  }, 4000)
}

const onUpdatePlaceSuccess = function () {
  $('#placeList').html('')
  $('#success-message')
    .text('Place has been updated successfully')
    .addClass('.success')
  setTimeout(function () {
    $('#success-message').text('').addClass('success')
  }, 4000)
}

const onUpdatePlaceFailure = (response) => {
  $('#error-message')
    .text("Sorry! Something wasn't right, please try again.")
    .addClass('.failure')
  setTimeout(function () {
    $('#error-message').text('').addClass('failure')
  }, 4000)
}

module.exports = {
  showAllPlacesSuccess,
  showAllPlacesFailure,
  createPlaceSuccess,
  createPlaceFailure,
  showPlaceSuccess,
  showPlaceFailure,
  onDestroyPlaceSuccess,
  onDestroyFailure,
  onUpdatePlaceSuccess,
  onUpdatePlaceFailure,
  hidePlacesSuccess
}
