// Config
var PathToEachMenuLink = "#header button a";

// When page loaded
$(document).ready(function () {

  onScroll(); // call function onload
  $(document).on("scroll", onScroll); // call function onscroll

  //Onclick link, smooth scroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
    });
  });
});

// Onscroll, apply active class changes
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $(PathToEachMenuLink).each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $(PathToEachMenuLink).removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}