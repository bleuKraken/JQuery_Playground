$(function() {

  //FADING OUT OR IN
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2500);
  $(".red-box").fadeIn(3000);
  $(".green-box").fadeIn(3000);

   // FADE OPACITY
   $(".red-box").fadeTo(2000,0.2);
   $(".green-box").fadeTo(2000, 0.5);
   $(".blue-box").fadeTo(2000, 0.8);

   // FADE TOGGLE
   $(".red-box").fadeToggle();

   // NOTICE THAT TOGGLE OR FADEOUT WILL REMOVE OBJECT FROM PAGE, AND STUFF WILL MOVE AROUND. iF YOU DON'T WANT THIS, THEN USE BELOW
   $(".green-box").fadeTo(2000, 0);
});
