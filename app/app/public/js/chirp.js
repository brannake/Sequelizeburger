/* global moment */
// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
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

      row.append("<p>" + newChirp.burger_name + "</p>");
      row.append("<p>not devoured</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      row.append('<button id="delete" class="btn btn-lg pull-right" onClick="window.location.reload();"> Confirm!</button>');
      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

$( document ).ready(function() {
// When the page loads, grab all of our chirps
$.get("/lol", function(data) {
  console.log(data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].burger_name + "</p>");
      if (data[i].devoured === true) {
        row.append("<p>" + "DEVOURED" + "</p>");
      }
      else {
      row.append("<p>" + "not devoured" + "</p>");
      }
    console.log(data[i].id);
      row.append("<p>At " + moment(data[i].date).format("h:mma on dddd") + "</p>");
      row.append('<button id="delete" name='+data[i].id+' class="btn btn-lg pull-right" onClick="window.location.reload();"> Delete!</button>');
      row.append('<button id="devour" name='+data[i].id+' class="btn btn-lg pull-right" onClick="window.location.reload();"> Devour!</button>');
      $("#chirp-area").prepend(row);

      }
    }

  })

  $(document).on('click','#delete',function(){
    
    var newChirp = {
    id: $(this).attr("name"),
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

    $.post("/api/delete", newChirp)
    // On success, run the following code
    .done(function() {
      console.log("done");
    });
});

  $(document).on('click','#devour',function(){
    var newChirp = {
    id: $(this).attr("name"),
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

    $.post("/api/devour", newChirp)
    // On success, run the following code
    .done(function() {
      console.log("done");
    });
  });

   });