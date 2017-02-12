$(function() {
  $('#sidebar').click(function (e) {
    var position = $(this).position();
    var width = $(this).width();
    if (e.pageX < position.left) {
      if ($(this).css('right') == '0px') {
        $(this).animate({
          right: "-="+width
        }, 600, function() {});
      } else {
        $(this).animate({
          right: "+="+width
        }, 600, function() {});
      }
    }
  });

});
