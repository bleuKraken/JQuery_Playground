$(function() {
  // appending can add classes to an item

  // creates a new list item for the first ul tag
  $("ul ul:first").append("<li>I am an added list item</li>");

  // appends an li tag at on the last ul tag
  $("<li>I am the last item</li>").appendTo($("ul ul:last"));

  // NOTE: the double ul ul below adds to every child called ul inside a ul.(ulception? I think yes)
  $("ul ul").prepend("<li>I am a prepend added by jQuery");

  // adds a prepend to something specific
  $("<li>I am a prepend added to something specific</li>").prependTo("ul ul:first");

  // adds me into the page :)
  $("<h4>Author:Erick Gonzalez</h4>").prependTo("#content");

  // creates another red box AFTER the first red-box
  $(".red-box").after("<div class='red-box'>Another Red Box</div>");

  // use BEFORE or AFTER to specifiy location
  $(".blue-box").before("<div class='blue-box'> Blue Box BEFORE</div>");
  // NOTE: I added eq(1) becuase it created a blue box after EVERYTHING named blue box
  $(".blue-box").eq(1).after("<div class='blue-box'> Blue Box AFTER</div>");

  // creates a blue box before evrything called "blue-box"
  $(".blue-box").before(function() {
    return "<div class='blue-box'>Blue box with function</div>";
  });

  //MOVING AN OBJECT SOMEWHERE ELSE. can also use .before()
  $(".green-box").after($(".red-box")); //NOTE: When you read and run it, it kinda sounds like it's backwards

});
