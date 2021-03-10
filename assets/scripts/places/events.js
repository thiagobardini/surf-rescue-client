const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onGetPlaces = function() {
  api.getPlaces().then((response) => {
    console.log(response)
    const placeList = Array.from(response.places)
    store.placeList = placeList
    // store.placesShow ? ui.showAllPlaces(placeList) : ui.hideAllPlaces();
    ui.showAllPlaces(placeList)

  })
  .catch(err => err)
}

module.exports = {
   onGetPlaces

}