const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onGetAllPlaces = () => {
  api.getPlaces()
  .then((response) => {
    console.log(response)
    const placeList = Array.from(response.places)
    store.placeList = placeList
    // store.placesShow ? ui.showAllPlaces(placeList) : ui.hideAllPlaces();
    ui.showAllPlaces(placeList)
  })
  .catch(err => err)
}

const onCreatePlace = (event) => {
  event.preventDefault()
  const form = event.target
  const data = { place: getFormFields(form) }
  api.createPlace(data)
    .then(ui.createPlaceSuccess)
    .catch(ui.createPlaceFailure)
}

module.exports = {
   onGetAllPlaces,
   onCreatePlace

}