$(document).ready(function() {
  $("h1").click(function() {
    var iceCreams = ["strawberry", "pistacio", "peanut-butter chocolate", "vanilla", "greek yogurt"];
    for (var index = 0; index < iceCreams.length; index +=1) {
      $("ul").append("<li>I love " + iceCreams[index] + "!</li>");
    }
    // iceCreams.forEach(function(iceCream) {
      // alert(iceCream);
    // });
  });
});

    //event.preventDefault();
