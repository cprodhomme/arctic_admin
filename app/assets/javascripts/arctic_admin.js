//= require jquery
//= require jquery_ujs

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

  var animationDone = true;
  $('#title_bar').click(function (e) {
    var position = $(this).position();
    var tabs = $('#tabs');
    var width = tabs.width() + 1;

    if (e.pageX < (position.left + 40)) {
      if(animationDone == true) {
        animationDone = false;
        if (tabs.css('left') == '0px') {
          tabs.animate({
            left: "-="+width
          }, 400, function() {
            animationDone = true;
          });
        } else {
          tabs.animate({
            left: "+="+width
          }, 400, function() {
            animationDone = true;
          });
        }
      }
    }
  });

});
