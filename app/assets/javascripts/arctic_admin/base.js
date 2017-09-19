//= require jquery
//= require jquery_ujs
//= require active_admin/base

$(function() {
  $('#sidebar').click(function (e) {
    var position = $(this).position();
    var width = $(this).width();
    if (e.pageX < position.left) {
      if ($(this).css('right') == '0px') {
        $(this).css('position', 'fixed');
        $(this).animate({
          right: "-="+width
        }, 600, function() {
          animationFilterDone = true;
        });
      } else {
        $(this).animate({
          right: "+="+width
        }, 600, function() {
          $(this).css('position', 'absolute');
          animationFilterDone = true;
        });
      }
    }
  });

  var animationDone = true;
  $('#utility_nav').click(function (e) {
    var position = $(this).position();
    var tabs = $('#tabs');
    var width = tabs[0].getBoundingClientRect().width;

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

  $('body').click(function (e) {
    var tabs = $('#tabs');
    var width = tabs[0].getBoundingClientRect().width;
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
  });

  $('#tabs .has_nested').click(function (e) {
    if ($(this).hasClass('open') == true) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });
});
