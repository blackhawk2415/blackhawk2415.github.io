$( document ).ready(function() {

  //Smooth Scroll Controls

  $(function(){ 

    var $window = $(window);
    var scrollTime = 1.1;
    var scrollDistance = 270;

    $window.on("mousewheel DOMMouseScroll", function(event){

      event.preventDefault(); 

      var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta*scrollDistance);

      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,
          overwrite: 5              
        });

    });
  });


  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });




});