$(function() {
  //replaces every li inside of an li with the following code
  $("li li").replaceWith("<li>I am the replacor<li>");

  // creates a variable that hold an ENTIRE TAG WITH DATA, WOW! SUPER COOL :D
  var firstListItem = $("<p> I am a variable </p>");
  // uses variable to replace data
  $("p:first").replaceWith(firstListItem);

  // replaces TWO items
  //$(".red-box, .blue-box").replaceWith("<div class='green-box'> I am a replacement! </div>");  // commented out because it interfears with code on bottom.

  // replaces ALL items of such
  $("<div class='green-box'>More Green!</div>").replaceAll(".red-box, .blue-box");
});
