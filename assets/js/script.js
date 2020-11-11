"use strict"


// CHECK event.target CAPTURE AND BUBBLE PHASE
// for(let elem of document.querySelectorAll('*')) {
//   elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
//   elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
// }


// TOGGLE TRANSPARENCY ON SCROLL //
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $('.fixed-top').css('background', '$black');
    $('.fixed-top').css('filter', 'invert(0)');
  } else {
    $('.fixed-top').css('background', 'transparent');
    $('.fixed-top').css('filter', 'invert(1)');
  }
});

// var svg = document.getElementById('svgMap');


// ACTIVE HIGHLIGHT -> navbar.html //
$(function () {
      var current = location.pathname;
      //     $('#mainNav a').each(function(){
      //         var $this = $(this);
      //         if the current path is like this link, make it active
      //         if($this.attr('href').indexOf(current) !== -1){
      //             $this.addClass('active');
      //             $this.css('background-color', 'white');
      //             $this.css('color', '$black');
      //         }
      //     })
      $('.mainNav .underline').each(function () {
          var $this = $(this);
          if ($this.attr('href').indexOf(current) !== -1) {
            $this.addClass('active');
            $this.css('width', '100%');
            // $this.css('background-color', 'white');
            $this.css('color', 'white');
          })
      });