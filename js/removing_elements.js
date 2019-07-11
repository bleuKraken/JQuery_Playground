$(function() {

  // removes tags, elements or anything really!
  $("p:first").remove(); // just leaves an empty ul tag with nothing in it

  // Remove above makes the browser forget about it. If i want to remove something
  // but not forget about it, then use datach()
  var detachedListItem = $("li").detach(); // creates a variable, the var detaches (removes) data. BUT it stores it
  $("#content").append(detachedListItem); // calls the data that was detached. NOTE: it places it at the end of #content

  // emptys out data from an element
  $(".red-box, .green-box").empty();
});
