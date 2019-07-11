$(function() {

  // SELECTS P tags and changes BACKGROUND to a color
  $("p").css("background-color", "rgba(180, 180, 20, 0.8)"); // .css("target the css property i want to change", "what do i want to change it to");

  // changes box color
  $(".red-box").css("background-color", "rgba(100, 150, 30, 0.8)");

  // targets an id
  $("#list").css("background-color", "rgba(30, 150, 100, 0.8)");

  // targets an INPUT tag, changes background color. NOTE: text color is black
  $("input[type='text']").css("background-color", "rgba(30, 100, 80, 20)");

  // NOTE: can target multiple items
  // code below is commented out becuase it overside some of the code above
  //$("h2, p, input").css("background-color", "rgba(100, 100, 100, 0.5)");

  // Can affect only the FIRST tag of p.
  $("p:first").css("font-size", "20px");

  // Can affect only the LAST tag of p.
  $("li:last").css("background-color", "rgba(150, 30, 30, 0.7)");

  // can affect every odd, or EVEN also 
  $("li:odd").css("background-color", "rgba(150, 130, 30, 0.7)");




});
