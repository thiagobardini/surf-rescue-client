const reviewEvents = require('../reviews/events')


const showAllPlaces = function (placeList) {
  //   $("#frame").hide();
  let storyHTML2 = "";
  for (const place of placeList) {
    storyHTML2 += `
      <div class="container alert alert-primary" role="alert" >
        <p>Place ID: ${place._id}</p>
        <p>Local Name: ${place.localName}</p>
        <p>Country: ${place.country}</p>
        <img src="${place.localImg}" alt="">
        <p>Description: ${place.description}</p>
        <p>surfLevel: ${place.surfLevel}</p>
        <p>Average Cost Day: US$${place.avgCostDay}</p>
        <p>Wave Range: ${place.waveRange}ft</p>
        <p>Great for: ${place.stance}</p>
        <p>Reviews: ${place.reviews}</p>
                  
   

         <div>
            <form class="create-review"  class="review-create-dynamic" data-id=${place._id}>
              <input type="text" name="review[title]" placeholder="Enter new title" required>
              <input type="text" name="review[content]" placeholder="Enter new content" required>
              <input type="text" name="review[stars]" placeholder="Enter new stars" required><br>
              <button type="submit" btn btn-primary">Create Review</button>
            </form>
          </div>


      </div>
    `;
  }
  $('#review-display').show()
  $('#review-display').html(storyHTML2)
  $("#placeList").html(storyHTML2);

  // $('.create-review').on('submit', '.review-create-dynamic', reviewEvents.onCreateReview)
};

const hideAllPlaces = function () {
  $("#placeList").hide();
};

module.exports = {
  showAllPlaces,
  hideAllPlaces,
};
