const showAllPlaces = function (res) {
  const placeList = Array.from(res.places)
  
//   $("#frame").hide();
  let storyHTML2 = ""
  for (const place of placeList) {
    storyHTML2 += `
      <div class="container alert alert-primary" role="alert" >
        <p>ID: ${place._id}</p>
        <p>Local Name: ${place.localName}</p>
        <p>Country: ${place.country}</p>
        <img src="${place.localImg}" alt="">
        
      </div>
    `
  }
  $('#placeList').html(storyHTML2)

};

const hideAllPlaces = function () {
  $("#placeList").hide()
};


module.exports = {
   showAllPlaces,
   hideAllPlaces

}