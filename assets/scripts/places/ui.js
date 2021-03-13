const placeEvents = require("./events.js");
const store = require('../store')


const showAllPlaces = function (placeList) {
  //   $("#frame").hide();
  let storyHTML2 = "";
  for (const place of placeList) {
    storyHTML2 += `
      <div class="container alert alert-primary" role="alert" >
        <p>Place ID: ${place._id}</p>
        <p>Local Name: ${place.localName}</p>
        <p>Country: ${place.country}</p>
        <img src="${place.localImg}" alt="" width="auto" height="300">
        <p>Description: ${place.description}</p>
        <p>surfLevel: ${place.surfLevel}</p>
        <p>Average Cost Day: US$${place.avgCostDay}</p>
        <p>Wave Range: ${place.waveRange}ft</p>
        <p>Great for: ${place.stance}</p>
        <p>Reviews: ${place.reviews}</p>
      </div>
    `;
  }
  $("#placeList").html(storyHTML2);

  // $('.create-review').on('submit', '.review-create-dynamic', reviewEvents.onCreateReview)
};

const hideAllPlaces = function () {
  $("#placeList").hide();
};

const createPlaceSuccess = (response) => {
  store.place = response.place;
  placesEvents.onGetAllPlaces()
    $('#showPlaces').trigger()
  


  // $("#success-message").text("Thank you for signing in").addClass(".success");
  // $("#   ").trigger("reset");
  // setTimeout(function () {
  //   $("#success-message").text("").removeClass("success");
  // }, 4000);
};

const createPlaceFailure = (response) => {
  console.error(response)
} 

module.exports = {
  showAllPlaces,
  hideAllPlaces,
  createPlaceSuccess,
  createPlaceFailure
};
