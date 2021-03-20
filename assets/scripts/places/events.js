const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onCreatePlace = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = { place: getFormFields(form) };
  api
    .createPlace(data)
    .then(ui.createPlaceSuccess)
    .catch(ui.createPlaceFailure);
};

const onGetAllPlaces = () => {
  api
    .getAllPlaces()
    .then(ui.showAllPlacesSuccess)
    .catch(ui.showAllPlacesFailure);
};

const onGetOnePlace = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  api
    .getOnePlace(data.place._id)
    .then(ui.showPlaceSuccess)
    .catch(ui.showPlaceFailure);
};

const onDynamicDestroyPlace = function (event) {
  const deleteBtn = event.target;
  const id = $(deleteBtn).data("id");
  api
    .destroyPlace(id)
    .then(ui.onDestroyPlaceSuccess)
    .catch(ui.onDestroyFailure);
};

const onUpdatePlace = function (event) {
  event.preventDefault();
  const updateForm = event.target;
  const id = $(updateForm).data("id");
  const formData = getFormFields(event.target);
  api
    .updatePlace(id, formData)
    .then(ui.onUpdatePlaceSuccess)
    .catch(ui.onUpdatePlaceFailure);
};

module.exports = {
  onGetAllPlaces,
  onCreatePlace,
  onGetOnePlace,
  onDynamicDestroyPlace,
  onUpdatePlace,
};
