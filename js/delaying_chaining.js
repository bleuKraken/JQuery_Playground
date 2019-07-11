$(function() {
  /*
  - Delaying and chaining is used to control time of animation start.
  - check out green box for chaining, multiple functions used
  */

  $(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut(1000).delay(500).fadeIn();

});
