/* global moment */
var donk = false;
// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    burger_name: $("#author").val().trim(),
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.burger_name + " chirped: </p>");
      row.append("<p>" + newChirp.devoured + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      row.append('<button id="delete" class="btn btn-lg pull-right"> Delete!</button>');
      row.append('<button id="devour" class="btn btn-lg pull-right"> Devour!</button>');
      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

$( document ).ready(function() {
    console.log( "ready!" );
// When the page loads, grab all of our chirps
$.get("/lol", function(data) {
  if (donk === false) {
  console.log(data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].burger_name + "</p>");
      if (data[i].devoured === 1) {
        row.append("<p>" + "DEVOURED" + "</p>");
      }
      else {
      row.append("<p>" + "not devoured" + "</p>");
      }
      row.append("<p>At " + moment(data[i].date).format("h:mma on dddd") + "</p>");
      row.append('<button id="delete" class="btn btn-lg pull-right"> Delete!</button>');
      row.append('<button id="devour" class="btn btn-lg pull-right"> Devour!</button>');

      $("#chirp-area").prepend(row);

      }
    }

  }
      donk = true;
})
});
