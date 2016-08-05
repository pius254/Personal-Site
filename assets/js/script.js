$(function(){
  var topoffset = 43;

  //fullscreen
    var wheight = $(window).height();//get height of the window
    $('.fullheight').css('height',wheight);

  //resize
  $(window).resize(function(){
    var wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });

  //WOW Scroll Spy
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
    $(window).scroll(function(){
      var windowpos = $(window).scrollTop();
      $('nav li a').removeClass('active');

      if (windowpos > $('#header').offset()){
        $('nav li a').removeClass('active');
        $('a[href$="#header"]').addClass('active');
      }

      if (windowpos > $('#about').offset()){
        $('nav li a').removeClass('active');
        $('a[href$="#about"]').addClass('active');
      }

      if (windowpos > $('#skills').offset()){
        $('nav li a').removeClass('active');
        $('a[href$="#skills"]').addClass('active');
      }

      if (windowpos > $('#Portfolio').offset()){
        $('nav li a').removeClass('active');
        $('a[href$="#Portfolio"]').addClass('active');
      }

      if (windowpos > $('#feedback').offset()){
        $('nav li a').removeClass('active');
      $('a[href$="#feedback"]').addClass('active');
      }

    });

    //Testimonials
    $.getJSON('data.json', function(data){
      var template = $('#speakertpl').html();
      var html = Mustache.to_html(template, data);
      $('#carousel').html(html);

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
    });

});//onload
