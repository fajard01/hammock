"use strict"

$(document).ready(function () {

  const navbar = document.getElementById('main-nav');
  let scrolled = false;

  window.onscroll = function () {
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
  };

});



// TOGGLE TRANSPARENCY ON SCROLL //
// $(window).scroll(function () {
//   let scroll = $(window).scrollTop();
//   if (scroll > 50) {
//     alert($('.main-nav').$('top'));
//   }
//     $('.main-nav').css('background', '$black');
//   } else {
//     $('.main-nav').css('background', 'transparent');
//   }
// });

// var svg = document.getElementById('svgmap');


// ACTIVE HIGHLIGHT -> navbar.html //
// $(function () {
//       var current = location.pathname;
//     $('#mainNav a').each(function(){
//         var $this = $(this);
//         if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//             $this.css('background-color', 'white');
//             $this.css('color', '$black');
//         }
//     })
// $('.mainNav .underline').each(function () {
//     var $this = $(this);
//     if ($this.attr('href').indexOf(current) !== -1) {
//       $this.addClass('active');
//       $this.css('width', '100%');
//       // $this.css('background-color', 'white');
//       $this.css('color', 'white');
//     })
// });