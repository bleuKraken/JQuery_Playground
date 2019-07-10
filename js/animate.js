$(function() {
  /*
  - .animate() creates a moving animation of an object or tag.
  - can take 3 perameters. the second and third are optional
  - first perameter is the direction, then the time it takes to complete, third perameter is moving moving.
  - the third perameter can be "linear" or "swing"
  */

  // moves to the right with margin added to the left side over 1 second, in a linearr motion.
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000, "linear");

  // moves back by subtracting the margin
  $(".blue-box").animate({
    "margin-left": "-=200px"
  }, 1000, "linear");
});
