$(function() {
// filtering elememts I have selected based on critera

  // selects the LI, and affects even of all the children
  $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.7)");

  // selects every third object inside of the li
  $("li").filter(function(index){
    return index % 3 === 1;
  }).css("background-color", "rgba(80, 80, 130, 0.7)"); // selects 1 3 5 7... of all li's

  // selects every third object inside of the li
  $("li").filter(function(index){
    return index % 3 === 2;
  }).css("background-color", "rgba(20, 50, 170, 0.7)"); // selects 2 5 8 11... of all li's

  // selects first
  $("li").first().css("background-color", "rgba(180, 80, 40, 0.6)");

  // if you manually count or know what place its in, you can use .eq()
  $("p").eq(1).css("background-color", "rgba(20, 30, 50, 0.5)"); // arrays start at 0,

  // you can put a negative, and my friend jQuery will search in reverse order to apply.
  $("li").eq(-4).css("background-color", "rgba(20, 130, 180, 0.5)"); // NOTE: this is the middle li

  // .not will exclude
  $("li").not(":first ").css("color", "rgba(30, 150, 40, 0.8)");

});
