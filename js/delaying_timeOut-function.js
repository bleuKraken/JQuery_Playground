$(function() {
  /*
  - Nesting can be done with jQuery
  - notice the function() inside a function() inside a function() (functionception? I think yes)
  */
  // will fade out one box, then another, then another
  $(".red-box").fadeTo(1000, 0, function() {
    $(".green-box").fadeTo(1000, 0, function() {
      $(".blue-box").fadeTo(1000, 0);
    });
  });
});
