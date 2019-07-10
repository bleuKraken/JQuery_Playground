$(function() {
    
  // NOTE ERICK, FLICKER ON BROWSER IS CAUSED BY RED BLOCK DISAPEARING FOR A NANOSECOND

  // SLIDE UP MAKES IT DISAPPEAR
  $(".red-box").slideUp(2000);

  // ONCE IT HAS DISAPEARED, SLIDE-DOWN IS USED TO MAKE IT REAPEAR
  $(".red-box").slideDown(2000);

  // DOESNT CARE WHERE ITS IT, JUST TOGGLES
  $(".blue-box").slideToggle(2000);
  $(".blue-box").slideToggle(5000);


});
