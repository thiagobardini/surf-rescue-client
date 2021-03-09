const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onGetPlaces = function(event) {
  event.preventDefault();
  store.placesShow = !store.placesShow
  api.getPlaces().then((response) => {
    console.log(response)
    store.placesShow ? ui.showAllPlaces(response) : ui.hideAllPlaces();

  })
  .catch(err => err)
}

module.exports = {
   onGetPlaces

}