$(function () {
  // THESE HAPPEN SUPER FAST, INSTANT TO THE HUMAN EYE
  $(".red-box").hide();
  $(".red-box").show();

  // Use show/hide as animations (not very commonly used)
  $(".green-box").hide(5000);
  $(".green-box").show(5000);

  $("p").toggle();
});
