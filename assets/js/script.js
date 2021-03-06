$(function(){
  var topoffset = 43;

  var isTouch = 'ontouchstart' in document.documentElement;

  //fullscreen
    var wheight = $(window).height();//get height of the window
    $('.fullheight').css('height',wheight);

  //resize
  $(window).resize(function(){
    var wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });

  //WOW animations
  var wow = new WOW({
      //disabled for mobile
      mobile: false
  });
  wow.init();

  //Smooth scroll
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
     }
    });

    //hightlight navigation on scroll
    $('body').scrollspy({ target: '.navbar-collapse' });

    //Testimonials
    $.getJSON('data.json', function(data){
      var template = $('#speakertpl').html();
      var html = Mustache.to_html(template, data);
      $('#carousel').html(html);

     if (!isTouch) {
       $('#carousel').cycle({
        fx: 'growY',
        /*sync: false,
        easing: 'easeOutBack',
        delay: -4000
        */
        pause: 1,
        speed: 1000,
        timeout: 1000,
        next: '#next_btn',
        prev: '#prev_btn',
      })
     }

    });

//Portfolio
      $("[rel='tooltip']").tooltip();

      $('.thumbnail').hover(
          function(){
              $(this).find('.caption').slideDown(250); //.fadeIn(250)
          },
          function(){
              $(this).find('.caption').slideUp(250); //.fadeOut(205)
          }
      );

  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

});//onload