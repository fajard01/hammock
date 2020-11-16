"use strict"

$(document).ready(function () {

  // scroll transparency and animation
  const navbar = document.getElementById('main-nav');
  let scrolled = false;

  window.onscroll = function () {
    if (navbar) {
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    }
  };

});


// highlight active link
$(function () {
  let current = location.pathname;

  $('#main-nav .link-nav .link').each(function () {
    let link = $(this);
    if (link.attr('href') == current) {
      link.addClass('active');
    }
  });
});