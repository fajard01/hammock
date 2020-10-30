
// TOGGLE TRANSPARENCY ON SCROLL //
// $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if(scroll > 50){
//         $('.fixed-top').css('background', 'black');
//         $('.fixed-top').css('filter', 'invert(0)');
//     } else{
//         $('.fixed-top').css('background', 'transparent');
//         $('.fixed-top').css('filter', 'invert(1)');
//     }
// });


$(function(){
    var current = location.pathname;
    $('#mainNav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
            $this.css('background-color', 'white');
            $this.css('color', 'black');
        }
    })
});

// const var blogModal = document.getElementById('blogModal')
// const var blogInput = document.getElementById('blogInput')
// blogModal.addEventListener('shown.bs.modal', () =>
//   blogInput.focus()
// })
