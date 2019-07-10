$(function() {

  /*
  - NOTICE that I can add a bunch of stuff to an animation class.
  - get creative, this is pretty cool! 
  */

  // creates animation of blue box moving to the right and shrinking, and disapearing.
  $(".blue-box").animate({
    "margin-left": "200px",
    "opacity": "0",
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  }, 5000);

  // change p tags to increase font size to 20px over 2 seconds
  $("p").animate({
    "font-size": "20px"
  }, 1000);

});
