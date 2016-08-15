$(document).ready(function(){
  $("form").submit(function(event){
    var userInputs = ["food", "place", "color", "train", "friend", "video-game"];
    userInputs.forEach(function(userInput){
      var inputValue = $("#" + userInput).val();
      $("#results").append("<li>" + inputValue + "</li>");
    });
    
    event.preventDefault();
  });
});
