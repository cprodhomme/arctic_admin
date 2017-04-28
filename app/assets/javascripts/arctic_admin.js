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
        }, 600, function() {
          animationFilterDone = true;
        });
      } else {
        $(this).animate({
          right: "+="+width
        }, 600, function() {
          animationFilterDone = true;
        });
      }
    }
  });

  var animationDone = true;
  $('#utility_nav').click(function (e) {
    if ($(window).width() < 960) {
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
    }
  });

  $('body').click(function (e) {
    if ($(window).width() < 960) {
      var tabs = $('#tabs');
      var width = tabs.width() + 1;
      if (tabs.css('left') == '0px') {
        if (e.pageX > width && e.pageY > 60) {
          if(animationDone == true) {
            animationDone = false;
            tabs.animate({
              left: "-="+width
            }, 400, function() {
              animationDone = true;
            });
          }
        }
      }
    }
  });

  $('#tabs .has_nested').click(function (e) {
    if ($(this).hasClass('open') == true) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });
});
