$(document).ready(function() {
  $(".clickable").click(function() {
    $("#baby-showing").toggle();
    $("#baby-hidden").toggle();
    $("#img").fadeToggle();
  });
  $(".clickableToo").click(function() {
    $("#more-pics-showing").toggle();
    $("#more-pics-hidden").toggle();
  });
});
