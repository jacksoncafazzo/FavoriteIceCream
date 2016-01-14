$(document).ready(function() {
  $("h1").click(function() {
    debugger;
    var iceCreams = ["strawberry", "pistacio", "peanut-butter chocolate", "vanilla", "greek yogurt"];
    for (var index = 0; index < iceCreams.length; index +=1) {
      alert("I love " + iceCreams[index] + "!");
    }
    // iceCreams.forEach(function(iceCream) {
      // alert(iceCream);
    // });
  });
});

    // iceCreams.forEach(function(iceCream) {


    // event.preventDefault();
