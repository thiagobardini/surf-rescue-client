const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onCreateReview = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log("data is ", data);
  console.log("store is ", store);
  data.review.owner = store.user._id;
  data.review.place = store.placeList.filter()._id;
  api
    .createReview()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => err);
};

module.exports = {
  onCreateReview,
};
