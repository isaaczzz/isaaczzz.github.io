$(document).ready(function(){
  $('#navigation a, #fixedbar a').on('click', function(e) {
    e.preventDefault();
  });
  
  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();

    var $nav = $("#navigation");
    if(scrolltop >= $nav.offset().top + $nav.height()) {
      $('#fixedbar').fadeIn(250);
    }
    else {
      $('#fixedbar').fadeOut(250);
    }
  });
});