$(function() {

  // selects the list item, and all the children, and all the childrens children etc.
  $("#list").find("li").css("background-color", "rgba(30, 30, 160, 0.4)");

  // selects only the children or chosen item
  $("#list").children("li").css("background-color", "rgba(30, 140, 160, 0.4)");

  // AFFECTS a parent of id list, the parent is called body
  $("#list").parents("body").css("background-color", "rgba(100, 100, 100, 0.7)");

  // similar to above, but only affects one parent. NOTE: no "s" in parents
  $("#list").parent().css("background-color", "rgba(158, 150, 100, 0.7)");

  // affects the siblings of an item
  $("#list").siblings(":header").css("background-color", "rgba(58, 50, 160, 0.7)");

  // selects everything that is previous of this tag or item
  $("li").prev().css("background-color", "rgba(10, 10, 10, 0.4)");

  // selects everything that is previous of this tag or item
  $("li").next().css("background-color", "rgba(10, 10, 100, 0.4)");


});
