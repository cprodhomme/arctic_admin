$(function() {
  $('#sidebar').click(function (e) {
    var position = $(this).position()
    if (e.pageX < position.left) {
      if ($(this).css('right') == '0px') {
        $(this).animate({
          right: "-=230"
        }, 600, function() {});
      } else {
        $(this).animate({
          right: "+=230"
        }, 600, function() {});
      }
    }
  });

});
